import PokemonCard from '../PokemonCard/PokemonCard'
import styles from '../../styles/explore.module.css'

const PokemonCardContainer = (props) => {
    return (
        <div className={styles.pokemonCardContainer}>
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
