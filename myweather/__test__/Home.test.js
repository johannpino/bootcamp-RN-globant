import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

test("<Home/> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});
