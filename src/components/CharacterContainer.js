import CharacterCard from "./CharacterCard";


const CharacterContainer = ( {characters} ) => {

    return(
        <div>
            {characters.map((element) => {
                return( <CharacterCard key={element.id} element={element}/>)
            })}
        </div>
    )
}

export default CharacterContainer;