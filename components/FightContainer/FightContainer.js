import PokemonCard from "../PokemonCard/PokemonCard";

const FightContainer = (props) => {
  let title;
  if (props.winner) {
    title = <p className="Pokecard-winner">WINNER</p>;
  } else {
    title = <p className="Pokecard-loser">LOSER!!!</p>;
  }
  return (
    <div className="pokemon-card-container">
      {title}
      {props.pokemons.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            exp={pokemon.base_experience}
            img={pokemon.img}
          />
        );
      })}
      <style jsx global>{`
        .Pokecard-winner {
          display: flex;
          align-items: center;
          justify-content: center;
          color: green;
        }
        .Pokecard-loser {
          display: flex;
          align-items: center;
          justify-content: center;
          color: red;
        }
        .pokemon-card-container {
          text-align: ;
        }
      `}</style>
    </div>
  );
};

export default FightContainer;
