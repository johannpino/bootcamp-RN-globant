import { useContext, useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ApiContext } from "../../context/ApiContext";

import styles from "../../styles/explore.module.css";


const PokemonCardContainer = () => {
  const { apiData } = useContext(ApiContext);

  const [pokeArrayDefault, setPokeArrayDefault] = useState(apiData)
  const [pokeArray, setPokeArray] = useState(apiData)
  const [showFiltered, setShowFiltered] = useState(false)

  const updateArray = (e) => {

    const string = String(e.target.value)

    if(string == ""){
      setShowFiltered(false)
    } else {      
    const filtered = apiData.filter(pokemon => {
      return pokemon.name.includes(string.toLowerCase())
    })
    setShowFiltered(true)
    setPokeArray(filtered)
    }
  }

  const type = (pokemon) =>
    pokemon.types.map((res, i) => <span key={i}>{res.type.name} </span>);

  useEffect( () => {
    setPokeArrayDefault(apiData)
  })

  return (
    <div>
      <div className={styles.searchBarDiv}>
        <img
              src="search.svg"
              alt="search-icon"
              className={styles.searchIcon}
            />
        <input
              type="text"
              className={styles.searchInput}
              placeholder="Busca un pokemon..."
              onChange={updateArray}
            />
      </div>
      <div className={styles.pokemonCardContainer}>
      {showFiltered 
      ? pokeArray.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            type={type(pokemon)}
            exp={pokemon.base_experience}
            img={pokemon.img}
          />
        );
      }) 
      : pokeArrayDefault.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            type={type(pokemon)}
            exp={pokemon.base_experience}
            img={pokemon.img}
          />
        );
      })
      }
      </div>
    </div>
  );
};

export default PokemonCardContainer;
