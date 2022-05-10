import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterContainer from './components/CharacterContainer';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

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


  return (
    <div className="App">

      <NavBar />
      <Switch>
       <Route exact path="/">
         <HomePage />
       </Route>
       <Route exact path="/characters">
        <CharacterContainer characters={characters}/>
       </Route>
     </Switch>

    </div>
  );
}

export default App;
