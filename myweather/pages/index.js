import React, { useState, useEffect } from "react";
import TiempoDetallado from "../components/TiempoDetallado";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import fetch from "isomorphic-unfetch";

export default function Home() {
  const [data, setData] = useState(null);
  const consultarAPI = async () => {
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

  //Llamar API
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Weather</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
      <main className={styles.main}>
        {data ? null : <h1 className={styles.title}>Cargando...</h1>}
        <TiempoDetallado data={data} />
        {/* if (data === null ) return null; */}
      </main>
    </div>
  );
}
