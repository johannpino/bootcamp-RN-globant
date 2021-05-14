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
    const dataApi = await fetchApi();
    dataApi.map(async (pokemon) => {
      const data = await fetch(pokemon.url);
      const response = await data.json();
      return setApiData(prevApiData => [...prevApiData,  response])
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
