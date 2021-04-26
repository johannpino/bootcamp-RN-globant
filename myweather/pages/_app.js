import "../styles/globals.css";
import "../styles/spinner.css";
import "../styles/pronostico.css";
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
