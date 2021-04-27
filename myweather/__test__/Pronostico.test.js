import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import { Pronostico } from "../components/Pronostico";
import { data } from "./ExampleData";

afterEach(cleanup);

test("<Pronostico/> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Pronostico data={data} />, div);
});

test("<Pronostico/> renders input correctly", () => {
  render(<Pronostico data={data} />);

  //titulo general
  const titulo = screen.getByTestId("title1");
  expect(titulo).toBeInTheDocument();
  expect(titulo.tagName).toBe("STRONG");
  expect(titulo.textContent).toBe("Pronóstico por hora");

  //titulo info hora actual
  const tituloAhora = screen.getByTestId("title-now");
  expect(tituloAhora).toBeInTheDocument();
  expect(tituloAhora.tagName).toBe("H5");
  expect(tituloAhora.textContent).toBe("Ahora");

  // temp hora actual
  const temp1 = screen.getByTestId("temp1");
  expect(temp1).toBeInTheDocument();
  expect(temp1.tagName).toBe("H4");
  expect(temp1.textContent).toBe("21º");

  // imagen hora actual
  const icon1 = screen.getByTestId("icon1");
  expect(icon1).toBeInTheDocument();
  expect(icon1.tagName).toBe("IMG");

  // icono prob de lluvia acutal
  const popIcon1 = screen.getByTestId("pop-icon1");
  expect(popIcon1).toBeInTheDocument();
  expect(popIcon1.tagName).toBe("I");
  expect(popIcon1.textContent).toBe("invert_colors");

  // prob lluvia actual
  const pop1 = screen.getByTestId("prob-lluvia1");
  expect(pop1).toBeInTheDocument();
  expect(pop1.tagName).toBe("STRONG");
  expect(pop1.textContent).toBe("0%");

  //titulo hora 2
  const titulo2 = screen.getByTestId("title2");
  expect(titulo2).toBeInTheDocument();
  expect(titulo2.tagName).toBe("H5");
  expect(titulo2.textContent).toBe("17:00");

  // temp hora 2
  const temp2 = screen.getByTestId("temp2");
  expect(temp2).toBeInTheDocument();
  expect(temp2.tagName).toBe("H4");
  expect(temp2.textContent).toBe("20º");

  // imagen hora 2
  const icon2 = screen.getByTestId("icon2");
  expect(icon2).toBeInTheDocument();
  expect(icon2.tagName).toBe("IMG");

  // icono prob de lluvia 2
  const popIcon2 = screen.getByTestId("pop-icon2");
  expect(popIcon2).toBeInTheDocument();
  expect(popIcon2.tagName).toBe("I");
  expect(popIcon2.textContent).toBe("invert_colors");

  // prob lluvia 2
  const pop2 = screen.getByTestId("prob-lluvia2");
  expect(pop2).toBeInTheDocument();
  expect(pop2.tagName).toBe("STRONG");
  expect(pop2.textContent).toBe("0%");

  //titulo hora 3
  const titulo3 = screen.getByTestId("title3");
  expect(titulo3).toBeInTheDocument();
  expect(titulo3.tagName).toBe("H5");
  expect(titulo3.textContent).toBe("18:00");

  // temp hora 3
  const temp3 = screen.getByTestId("temp3");
  expect(temp3).toBeInTheDocument();
  expect(temp3.tagName).toBe("H4");
  expect(temp3.textContent).toBe("19º");

  // imagen hora 3
  const icon3 = screen.getByTestId("icon3");
  expect(icon3).toBeInTheDocument();
  expect(icon3.tagName).toBe("IMG");

  // icono prob de lluvia 3
  const popIcon3 = screen.getByTestId("pop-icon3");
  expect(popIcon3).toBeInTheDocument();
  expect(popIcon3.tagName).toBe("I");
  expect(popIcon3.textContent).toBe("invert_colors");

  // prob lluvia 3
  const pop3 = screen.getByTestId("prob-lluvia3");
  expect(pop3).toBeInTheDocument();
  expect(pop3.tagName).toBe("STRONG");
  expect(pop3.textContent).toBe("0%");

  //titulo hora 4
  const titulo4 = screen.getByTestId("title4");
  expect(titulo4).toBeInTheDocument();
  expect(titulo4.tagName).toBe("H5");
  expect(titulo4.textContent).toBe("19:00");

  // temp hora 4
  const temp4 = screen.getByTestId("temp4");
  expect(temp4).toBeInTheDocument();
  expect(temp4.tagName).toBe("H4");
  expect(temp4.textContent).toBe("17º");

  // imagen hora 4
  const icon4 = screen.getByTestId("icon4");
  expect(icon4).toBeInTheDocument();
  expect(icon4.tagName).toBe("IMG");

  // icono prob de lluvia 4
  const popIcon4 = screen.getByTestId("pop-icon4");
  expect(popIcon4).toBeInTheDocument();
  expect(popIcon4.tagName).toBe("I");
  expect(popIcon4.textContent).toBe("invert_colors");

  // prob lluvia 4
  const pop4 = screen.getByTestId("prob-lluvia4");
  expect(pop4).toBeInTheDocument();
  expect(pop4.tagName).toBe("STRONG");
  expect(pop4.textContent).toBe("0%");
});
