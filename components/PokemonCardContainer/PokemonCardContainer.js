import { useContext, useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ApiContext } from "../../context/ApiContext";

import styles from "../../styles/explore.module.css";


const PokemonCardContainer = () => {
  const { apiData } = useContext(ApiContext);

  const [pokeArray, setPokeArray] = useState(apiData)
  const [search, setSearch] = useState("")

  const updateArray = (e) => {
    const string = String(e.target.value)
  
    const filtered = pokeArray.filter(pokemon => {
      return pokemon.name.includes(string.toLowerCase())
    })
    console.log(filtered)
    setPokeArray(filtered)
  }

  const type = (pokemon) =>
    pokemon.types.map((res, i) => <span key={i}>{res.type.name} </span>);

  useEffect( async () => {
    setPokeArray(apiData)
    console.log(apiData)
  }, undefined)

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
      {pokeArray ? pokeArray.map((pokemon, index) => {
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
      }) : null}
      </div>
    </div>
  );
};

export default PokemonCardContainer;
