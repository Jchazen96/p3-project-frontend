import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [networks, setNetworks] = useState([])
  const [shows, setShows] = useState([])
  const [characters, setCharacters] = useState([])


  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:9292/networks')
      let res = await req.json()
      setNetworks(res)
    })()
  },[])

  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:9292/shows')
      let res = await req.json()
      setShows(res)
    })()
  },[])

  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:9292/characters')
      let res = await req.json()
      setCharacters(res)
    })()
  },[])

  // console.log('networks', networks)
  // console.log('shows', shows)
  // console.log('characters', characters)






  return (
    <div className="App">
      <h1>T.V Shows</h1>
    </div>
  );
}

export default App;
