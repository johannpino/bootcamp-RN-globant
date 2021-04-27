import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import WeatherProvider, { WeatherContext } from "../context/weatherContext";
import Home from "../pages/index";

afterEach(cleanup);

test("<index/> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <WeatherProvider>
      <Home />
    </WeatherProvider>,
    div
  );
});
