import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  //state
  const [data, setData] = useState(null);

  //Llamar API
  useEffect(() => {
    const consultarAPI = () => {
      const apiKey = "5c2928819e91e1b61db39f58e3ea69d8";
      let lat;
      let lon;
      navigator.geolocation.getCurrentPosition(getPosition);
      async function getPosition(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        const lang = "sp";
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=${lang}`;
        await fetch(url)
          .then((r) => r.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      }
    };
    consultarAPI();
  }, []);

  return (
    <WeatherContext.Provider value={{ data }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;
