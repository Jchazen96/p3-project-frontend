import {useState} from 'react'


const ShowCardChar = ({element, setShowChars, setCharacters}) => {

    const {name, image, age, id} = element
    const [deleteBtn, setDeleteBtn] = useState(false)
    const [editBtn, setEditBtn] = useState(false)
    const [form, setForm] = useState({
        name: name,
        image: image,
        age: age
    })


let deleteMsg = deleteBtn ? 'Are you sure?' : 'Delete'

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

const handleEdit = async(e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:9292/characters/${id}`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })
    let res = await req.json()
    setCharacters((prevState)=>[...prevState, res])
    setEditBtn(false)
}

    return(
        <div className='Character-card'>
            <div className='char-img'>
                <img src={image} alt={name} /> <br/>
            </div>

            <div className="char-desc">
                <h3>{name}</h3>
                <h3>{age} Years Old</h3>
                <button onClick={()=>{setEditBtn(!editBtn)}}>Edit</button><br/> 
                {  editBtn ? 
                <form onSubmit={handleEdit}>
                <input type='text' name='name' placeholder='Enter Character Name' onChange={(e)=> setForm({...form, name:e.target.value})}/>
                <input type='text' name='image' placeholder='Enter Character Image URL' onChange={(e)=> setForm({...form, image:e.target.value})}/>
                <input type='number' name='age' placeholder='Enter Character Age' onChange={(e)=> setForm({...form, age:e.target.value})}/>
                <button type='submit'>Submit</button>
                </form>
                : null
                }
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

export default ShowCardChar;