import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { data } from "./ExampleData";

test("<Header/> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

jest.mock("next/image", () => {
  return () => <></>;
});

test("<Header/> renders input correctly", () => {
  render(<Header data={data} />);

  //timezone
  const timezone = screen.getByTestId("timezone");
  expect(timezone).toBeInTheDocument();
  expect(timezone.tagName).toBe("SPAN");
  expect(timezone.textContent).toBe("Montevideo: ");

  // //Temperature
  const temp = screen.getByTestId("temperature");
  expect(temp).toBeInTheDocument();
  expect(temp.tagName).toBe("STRONG");
  expect(temp.textContent).toBe("21º");

  //title
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe("SPAN");
  expect(title.textContent).toBe(" My Weather");
});
