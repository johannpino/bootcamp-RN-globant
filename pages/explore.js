import React from 'react'
import Container from '../components/Container/Container'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import PokemonCardContainer from '../components/PokemonCardContainer/PokemonCardContainer'

const explore = () => {

    const defaultProps = [
            { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
            { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
            { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
            { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
            { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
            { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
            { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
            { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
            { id: 419, name: "Floatzel", type: "water", base_experience: 49}
          ]

    return (
        <div>
            <style jsx global>{`

            @import url(//db.onlinewebfonts.com/c/6ab539c6fc2b21ff0b149b3d06d7f97c?family=Minecraft);

            .pokemon-card-container {
                display: flex;
                flex-wrap: wrap;
            }

            .pokecard-card {
                width: 176px;
                background-color: white;
                padding: 15px;
                text-align: center;
                margin: 12px auto;
                -webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.3);
            }

            .pokecard-img {
                width: 144px;
                padding: 0 auto;
            }

            .pokecard-title {
                font-size: 24px
            }
            
            `}</style>

            <Container>  
                <PokemonCardContainer pokemons={defaultProps} />
            </Container>
        </div>
    )
}

export default explore
