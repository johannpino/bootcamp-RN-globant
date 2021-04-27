import { useContext } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ApiContext } from "../../context/ApiContext";

import styles from "../../styles/explore.module.css";

const PokemonCardContainer = () => {
  const { apiData } = useContext(ApiContext);

  const type = (pokemon) =>
    pokemon.types.map((res, i) => <span key={i}>{res.type.name} </span>);

  return (
    <div className={styles.pokemonCardContainer}>
      {apiData.map((pokemon, index) => {
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
      })}
    </div>
  );
};

export default PokemonCardContainer;
