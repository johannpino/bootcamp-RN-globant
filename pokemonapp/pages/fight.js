import Container from "../components/Container/Container";
import FightContainer from "../components/FightContainer/FightContainer";

const Fight = (props) => {
  const defaultProps = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    { id: 419, name: "Floatzel", type: "water", base_experience: 49 },
    { id: 151, name: "Mew", type: "psychic", base_experience: 270 },
  ];

  let fight1 = [];
  let fight2 = [...defaultProps];

  while (fight1.length < fight2.length) {
    let randomIndex = Math.floor(Math.random() * fight2.length);
    let randomPok = fight2.splice(randomIndex, 1)[0];
    fight1.push(randomPok);
  }

  let exp1 = fight1.reduce(
    (exp, defaultProps) => exp + defaultProps.base_experience,
    0
  );
  let exp2 = fight2.reduce(
    (exp, defaultProps) => exp + defaultProps.base_experience,
    0
  );

  return (
    <div>
      <style jsx global>{`
        @import url(//db.onlinewebfonts.com/c/6ab539c6fc2b21ff0b149b3d06d7f97c?family=Minecraft);

        .pokemon-card-container {
          display: inline-flex;
          flex-wrap: inherit;
        }

        .pokecard-card {
          width: 176px;
          background-color: white;
          padding: 15px;
          text-align: center;
          margin: 12px auto;
          border-radius: 4px;
          -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.3);
          -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.3);
        }

        .pokecard-img {
          width: 144px;
          padding: 0 auto;
        }

        .pokecard-title {
          font-size: 24px;
        }
        .title-fight {
          text-align: center;
        }
        .title-fight {
          display: flex;
        }
      `}</style>
      <Container>
        <h1 className="title-fight">Total Experience: {exp1}</h1>
        <FightContainer pokemons={fight1} winner={exp1 > exp2} />
        <h1 className="title-fight">Total Experience: {exp2}</h1>
        <FightContainer pokemons={fight2} winner={exp2 > exp1} />
      </Container>
    </div>
  );
};

export default Fight;
