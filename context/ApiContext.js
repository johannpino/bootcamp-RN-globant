import React, { createContext, useEffect, useState } from "react";
import { API_URL } from "./constants";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const fetchApi = async () => {
    const data = await fetch(API_URL);
    const response = await data.json();
    let results = response.results;
    return results;
  };

  const fetchData = async () => {
    const data = await fetchApi();
    let pokemons = [];
    data.map(async (pokemon) => {
      return await fetch(pokemon.url)
        .then((response) => response.json())
        .then((result) => {
          pokemons.push(result);
          setApiData([...pokemons]);
        });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ apiData }}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
