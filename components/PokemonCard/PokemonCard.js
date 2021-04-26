import React from 'react'

const PokemonCard = (props) => {

    return (
        <div className="pokecard-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} className="pokecard-img"/>
            <h1 className="pokecard-title">{props.name}</h1>
            <p className="pokecard-data">Type: {props.type}</p>
            <p className="pokecard-data">Exp: {props.exp}</p>
        </div>
    )
}

export default PokemonCard
