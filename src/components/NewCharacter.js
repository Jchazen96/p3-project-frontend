import {useState} from 'react'

const NewCharacter = ({setCharacters}) => {

const [form, setForm] = useState({
    name: "",
    image: "",
    age: 0,
    show_id: 0
})

const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch('http://localhost:9292/characters', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })
    let res = await req.json()
    setCharacters((prevState)=>[...prevState, res])
}


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Character Name' onChange={(e)=> setForm({...form, name:e.target.value})}/>
                <input type='text' name='image' placeholder='Character Image' onChange={(e)=> setForm({...form, image:e.target.value})}/>
                <input type='number' name='age' placeholder='Character Age' onChange={(e)=> setForm({...form, age:e.target.value})}/>
                <input type='number' name='show_id' placeholder='Character Show ID' onChange={(e)=> setForm({...form, show_id:e.target.value})}/>
                <button type='submit'>Add Character</button>
            </form>

        </div>
    )
}

export default NewCharacter;