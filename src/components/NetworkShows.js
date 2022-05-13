import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const NetworkShows = ({element, selectedShow, setSelectedShow, setShows, setNetworkArr}) => {

    const {name, image, id} = element
    const [deleteBtn, setDeleteBtn] = useState(false)

    const handleDelete = async (e) => {
        e.preventDefault()
        let req = await fetch(`http://localhost:9292/shows/${id}`, {
            method: "DELETE"
        })
        setNetworkArr((prevState) => {
            if (req.ok){
                let arr = prevState.filter((element)=>{
                    return(element.id !== id)
                })
                return arr
            }
        })
    }

    let deleteMsg = deleteBtn ? 'Are you sure?' : 'Delete'


    return(
    
        <div className="show-card" onClick={()=>{setSelectedShow(id)}}>
            <div className='show-img' >
              <NavLink to='/show-characters' exact><img src={image} alt={name}/> </NavLink>  <br/>
            </div>
         <div className='show-desc'>
            <h3>{name}</h3>
         </div>
         <button onClick={()=>{setDeleteBtn(true)}}>{deleteMsg}</button><br/>

         {deleteBtn ? 
            <button onClick={handleDelete}>Yes</button>: null
        }
            {deleteBtn ? 
            <button onClick={()=>{setDeleteBtn(false)}}>No, take me back</button> : null
        }
        

        </div>
    )
}

export default NetworkShows;