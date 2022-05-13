import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterContainer from './components/CharacterContainer';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Nickelodeon from './components/Nickelodeon';
import CartoonNetwork from './components/CartoonNetwork';
import ShowChars from './components/ShowChars';

function App() {

  const [network, setNetwork] = useState(0)
  const [networkArr, setNetworkArr] = useState([])
  const [shows, setShows] = useState([])
  const [characters, setCharacters] = useState([])
  const [selectedShow, setSelectedShow] = useState(1)
  const [showChars, setShowChars] = useState([])



  useEffect(() => {
    (async () => {
      let req = await fetch(`http://localhost:9292/networks/${network}`)
      let res = await req.json()
      setNetworkArr(res.shows)
    })()
  },[network, shows])

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

  //showChars

  useEffect(()=> {
    (async ()=> {
      let req = await fetch(`http://localhost:9292/shows/${selectedShow}`)
      let res = await req.json()
      setShowChars(res.characters)
    })()
  },[selectedShow, characters])

  // characters


  return (
    <div className="App">

      <NavBar />
      <Switch>
       <Route exact path="/">
         <HomePage setNetwork={setNetwork}/>
       </Route>
       <Route exact path="/characters">
        <CharacterContainer characters={characters} setCharacters={setCharacters}/>
       </Route>
       <Route exact path ="/nickelodeon" >
         <Nickelodeon setNetworkArr={setNetworkArr} setShows={setShows} network={network} networkArr={networkArr} selectedShow={selectedShow} setSelectedShow={setSelectedShow}/>
       </Route>
       <Route exact path ="/cartoon-network" >
         <CartoonNetwork setNetworkArr={setNetworkArr} setShows={setShows} network={network} networkArr={networkArr} selectedShow={selectedShow} setSelectedShow={setSelectedShow}/>
       </Route>
       <Route exact path='/show-characters' >
        <ShowChars showChars={showChars} setShowChars={setShowChars} setCharacters={setCharacters} selectedShow={selectedShow}/>
       </Route>
     </Switch>

    </div>
  );
}

export default App;
