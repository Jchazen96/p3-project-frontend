import CharacterCard from "./CharacterCard";


const CharacterContainer = ( {setCharacters, characters} ) => {

    return(
        <div className='char-grid'>
            {characters.map((element) => {
                return( <CharacterCard key={element.id} element={element} setCharacters={setCharacters}/>)
            })}
        </div>
    )
}

export default CharacterContainer;