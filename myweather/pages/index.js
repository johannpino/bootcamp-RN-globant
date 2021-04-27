import React, { useContext } from "react";
import TiempoDetallado from "../components/TiempoDetallado";
import Spinner from "../components/Spinner";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Pronostico } from "../components/Pronostico";
import Header from "../components/Header";
import Time from "../components/Time";
import { WeatherContext } from "../context/weatherContext";

export default function Home() {
  const { data } = useContext(WeatherContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Weather</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <Pronostico data={data} />
        <Spinner />
        <Time />
        <TiempoDetallado />
      </main>
    </div>
  );
}
