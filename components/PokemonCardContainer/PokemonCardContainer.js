import PokemonCard from '../PokemonCard/PokemonCard'

const PokemonCardContainer = (props) => {
    return (
        <div className="pokemon-card-container">
            {props.pokemons.map((pokemon, index) => {
                return <PokemonCard
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.types.map((res,i) => (<span key={i}>{res.type.name} </span>))}
                        exp={pokemon.base_experience}
                        img={pokemon.img}
                        />
            })}
        </div>
    )
}

export default PokemonCardContainer
