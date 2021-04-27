import React, {useState, useEffect} from 'react'
import Container from '../components/Container/Container'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import PokemonCardContainer from '../components/PokemonCardContainer/PokemonCardContainer'

const explore = () => {

    /*const defaultProps = [
            { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
            { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
            { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
            { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
            { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
            { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
            { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
            { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
            { id: 419, name: "Floatzel", type: "water", base_experience: 49}
          ]*/
    const [ pokeAll, setPokeAll ] = useState([]);
    const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=50';
          
    const fetchApi = () => {
        return fetch(urlApi)
        .then(response =>  response.json())
        .then(response => {
            let pokes = response.results;
            let pokeinfoAll = [];
            pokes.map(element => {
                return fetch(element.url)
                .then(res => res.json())
                .then(result => {
                    let inforForPoke = result;
                    pokeinfoAll.push(inforForPoke);
                    setPokeAll([...pokeinfoAll]);
                })
            });
        })
    };
    
    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <Container>  
                <PokemonCardContainer pokemons={pokeAll} />
            </Container>
        </div>
    )
}

export default explore;
