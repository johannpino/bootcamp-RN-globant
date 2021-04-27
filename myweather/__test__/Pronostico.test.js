import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Pronostico } from "../components/Pronostico";
import data from "./ExampleData";

afterEach(cleanup);

test("<Pronostico/> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Pronostico data={data} />, div);
});

test("<Pronostico/> renders input correctly", () => {
  render(<Pronostico data={data} />);
});
