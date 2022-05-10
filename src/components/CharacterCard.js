const CharacterCard = ( {element} ) => {

const {name, image, age} = element


    return(
        <div className="Character-card">
            <div className='char-img'>
                <img src={image} alt={name} /> <br/>
            </div>

            <div className="char-desc">
                <h3>{name}</h3>
                <h3>{age} Years Old</h3>
            </div>


        </div>
    )
}


export default CharacterCard;