import "../styles/globals.css";
import "../styles/time.css";
import "../styles/header.css";
import "../styles/spinner.css";
import "../styles/pronostico.css";
import "../styles/tiempodetallado.css";
import React from "react";
import WeatherProvider from "../context/weatherContext";

function MyApp({ Component, pageProps }) {
  return (
    <WeatherProvider>
      <Component {...pageProps} />;
    </WeatherProvider>
  );
}

export default MyApp;
