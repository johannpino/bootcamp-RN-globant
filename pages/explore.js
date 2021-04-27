import React from "react";
import Container from "../components/Container/Container";
import PokemonCardContainer from "../components/PokemonCardContainer/PokemonCardContainer";
import ApiProvider from "../context/ApiContext";

import styles from "../styles/explore.module.css";

const explore = () => {
  return (
    <ApiProvider>
      <div>
        <Container>
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
            />
          </div>
          <PokemonCardContainer />
        </Container>
      </div>
    </ApiProvider>
  );
};

export default explore;
