import React from "react";
import Container from "../components/Container/Container";
import PokemonCardContainer from "../components/PokemonCardContainer/PokemonCardContainer";


import styles from "../styles/explore.module.css";

const explore = () => {
  return (
      <div>
        <Container>
          <PokemonCardContainer />
        </Container>
      </div>
  );
};

export default explore;
