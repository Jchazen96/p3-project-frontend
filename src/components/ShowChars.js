import ShowCharCard from "./ShowCharCard"
import {useState} from 'react'

const ShowChars = ({showChars, setShowChars, selectedShow, setCharacters}) => {

console.log(showChars)

    const [formVisible, setFormVisible] = useState(false)
    const [form, setForm] = useState({
        name: '',
        image: '',
        age: 0,
        show_id: `${selectedShow}`
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
        setFormVisible(false)
    }

    return(
        <div className='char-grid'>
            {showChars.map((element)=>{
                return( <ShowCharCard key={element.id} element={element} setShowChars={setShowChars}/>)
            })}
            <div>
        <button onClick={()=>{setFormVisible(!formVisible)}}>Add a Character!</button>
        {
            formVisible ? 
        
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Enter Character Name' onChange={(e)=> setForm({...form, name:e.target.value})}/>
                <input type='text' name='image' placeholder='Enter Character Image URL' onChange={(e)=> setForm({...form, image:e.target.value})}/>
                <input type='number' name='age' placeholder='Enter Character Age' onChange={(e)=> setForm({...form, age:e.target.value})}/>
                <button type='submit'>Submit</button>
            </form> : null
        }   
        </div>
        </div>


    )
}

export default ShowChars;