import {useState} from 'react'

const CharacterCard = ( {element, setCharacters} ) => {

const {name, image, age, id} = element
const [deleteBtn, setDeleteBtn] = useState(false)

const handleDelete = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:9292/characters/${id}`, {
        method: "DELETE"
    })
    setCharacters((prevState) => {
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
        <div className="Character-card">
            <div className='char-img'>
                <img src={image} alt={name} /> <br/>
            </div>

            <div className="char-desc">
                <h3>{name}</h3>
                <h3>{age} Years Old</h3>
                <button onClick={()=>{setDeleteBtn(true)}}>{deleteMsg}</button><br/>
                {deleteBtn ? 
            <button onClick={handleDelete}>Yes</button>: null
        }
            {deleteBtn ? 
            <button onClick={()=>{setDeleteBtn(false)}}>No, take me back</button> : null
        }
            </div>


        </div>
    )
}


export default CharacterCard;