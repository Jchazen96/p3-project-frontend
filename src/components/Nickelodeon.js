import React from 'react'
import NetworkShows from './NetworkShows'
import {useState} from 'react'

const Nickelodeon = ({networkArr, selectedShow, setSelectedShow, network, setShows, setNetworkArr}) => {

    console.log('selected network', network)
    
    const [formVisible, setFormVisible] = useState(false)
    const [form, setForm] = useState({
        name: '',
        image: '',
        network_id: `${network}`
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch('http://localhost:9292/shows', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        })
        let res = await req.json()
        setShows((prevState)=>[...prevState, res])
        setFormVisible(false)
    }

    return(
        <div className='show-grid'>
            {networkArr.map((element)=>{
                return( <NetworkShows key={element.id} element={element} selectedShow={selectedShow} setSelectedShow={setSelectedShow} network={network} setShows={setShows} setNetworkArr={setNetworkArr}/>)
            })}
            <div>
        <button onClick={()=>{setFormVisible(!formVisible)}}>Add a Show!</button>
        {
            formVisible ? 
        
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Enter Show Name' onChange={(e)=> setForm({...form, name:e.target.value})}/>
                <input type='text' name='image' placeholder='Enter Show Image URL' onChange={(e)=> setForm({...form, image:e.target.value})}/>
                <button type='submit'>Submit</button>
            </form> : null
        }   
        </div>
        </div>
    )
}

export default Nickelodeon;