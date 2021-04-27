import React, {useState, useEffect} from 'react'
import Container from '../components/Container/Container'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import PokemonCardContainer from '../components/PokemonCardContainer/PokemonCardContainer'
import styles from '../styles/explore.module.css'

const explore = () => {

    const [ pokeAll, setPokeAll ] = useState([]);
    const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=50';
          
    async function fetchApi () {
        const result = await fetch(urlApi)
        const data = await result.json();
        let pokes = data.results;

        return pokes;
    }

    async function fetchData () {
        const pokes = await fetchApi();
        let pokeinfoAll = [];
        pokes.map(element => {
            return fetch(element.url)
            .then(res => res.json())
            .then(result => {
                const inforForPoke = result;
                pokeinfoAll.push(inforForPoke);
                setPokeAll([...pokeinfoAll]);
            })
        });
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Container>  
                <div className={styles.searchBarDiv}>
                    <img src="search.svg" alt="search-icon" className={styles.searchIcon}/>
                    <input type="text" className={styles.searchInput} placeholder="Busca un pokemon..."/>
                </div>
                <PokemonCardContainer pokemons = {pokeAll}/>
            </Container>
        </div>
    )
}

export default explore;
