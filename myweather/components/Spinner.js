import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

const Spinner = () => {
  const { data } = useContext(WeatherContext);
  return <>{data ? null : <div className="loader">Loading...</div>}</>;
};

export default Spinner;
