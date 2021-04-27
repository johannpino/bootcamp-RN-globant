import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Time from "../components/Time";
import { data } from "./ExampleData";

afterEach(cleanup);

test("<Time/> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Time></Time>, div);
});

test("<Time/> Title exists", () => {
  render(<Time data={data} />);
  const titleTest = screen.getByTestId("titleTest");
  expect(titleTest).toBeInTheDocument();
});

test("<Time/> Correct title tag", () => {
  render(<Time data={data} />);
  const titleTest = screen.getByTestId("titleTest");
  expect(titleTest.tagName).toBe("P");
});

test("<Time/> Correct title content", () => {
  render(<Time data={data} />);
  const titleTest = screen.getByTestId("titleTest");
  expect(titleTest.textContent).toBe("Tiempo en Montevideo");
});

test("<Time/> Actual time exists", () => {
  render(<Time data={data} />);
  const timeTest = screen.getByTestId("timeTest");
  expect(timeTest).toBeInTheDocument();
});

test("<Time/> Correct time tag", () => {
  render(<Time data={data} />);
  const timeTest = screen.getByTestId("timeTest");
  expect(timeTest.tagName).toBe("P");
});

test("<Time/> Correct time content", () => {
  render(<Time data={data} />);
  const timeTest = screen.getByTestId("timeTest");
  expect(timeTest.textContent).toBe("A partir de las 16:11");
});

test("<Time/> Actual temperature exists", () => {
  render(<Time data={data} />);
  const temperatureTest = screen.getByTestId("temperatureTest");
  expect(temperatureTest).toBeInTheDocument();
});

test("<Time/> Correct temperature tag", () => {
  render(<Time data={data} />);
  const temperatureTest = screen.getByTestId("temperatureTest");
  expect(temperatureTest.tagName).toBe("STRONG");
});

test("<Time/> Correct temperature content", () => {
  render(<Time data={data} />);
  const temperatureTest = screen.getByTestId("temperatureTest");
  expect(temperatureTest.textContent).toBe("21°");
});

test("<Time/> Current description exists", () => {
  render(<Time data={data} />);
  const descriptionTest = screen.getByTestId("descriptionTest");
  expect(descriptionTest).toBeInTheDocument();
});

test("<Time/> Correct description tag", () => {
  render(<Time data={data} />);
  const descriptionTest = screen.getByTestId("descriptionTest");
  expect(descriptionTest.tagName).toBe("H5");
});

test("<Time/> Correct description content", () => {
  render(<Time data={data} />);
  const descriptionTest = screen.getByTestId("descriptionTest");
  expect(descriptionTest.textContent).toBe("Cielo claro");
});

test("<Time/> Actual minTemperature exists", () => {
  render(<Time data={data} />);
  const minTempTest = screen.getByTestId("minTempTest");
  expect(minTempTest).toBeInTheDocument();
});

test("<Time/> Correct minTemperature tag", () => {
  render(<Time data={data} />);
  const minTempTest = screen.getByTestId("minTempTest");
  expect(minTempTest.tagName).toBe("P");
});

test("<Time/> Correct minTemperature content", () => {
  render(<Time data={data} />);
  const minTempTest = screen.getByTestId("minTempTest");
  expect(minTempTest.textContent).toBe("Min: 2°");
});

test("<Time/> Actual maxTemperature exists", () => {
  render(<Time data={data} />);
  const maxTempTest = screen.getByTestId("maxTempTest");
  expect(maxTempTest).toBeInTheDocument();
});

test("<Time/> Correct maxTemperature tag", () => {
  render(<Time data={data} />);
  const maxTempTest = screen.getByTestId("maxTempTest");
  expect(maxTempTest.tagName).toBe("P");
});

test("<Time/> Correct maxTemperature content", () => {
  render(<Time data={data} />);
  const maxTempTest = screen.getByTestId("maxTempTest");
  expect(maxTempTest.textContent).toBe("Max: 11°");
});

test("<Time/> Actual probability rain exists", () => {
  render(<Time data={data} />);
  const rainTest = screen.getByTestId("rainTest");
  expect(rainTest).toBeInTheDocument();
});

test("<Time/> Correct probability rain tag", () => {
  render(<Time data={data} />);
  const rainTest = screen.getByTestId("rainTest");
  expect(rainTest.tagName).toBe("P");
});

test("<Time/> Correct probability rain content", () => {
  render(<Time data={data} />);
  const rainTest = screen.getByTestId("rainTest");
  expect(rainTest.textContent).toBe("0.2% probabilidad de lluvia en el día");
});

test("<Time/> Image exists", () => {
  render(<Time data={data} />);
  const imgTest = screen.getByTestId("imgTest");
  expect(imgTest).toBeInTheDocument();
});

test("<Time/> Correct image tag", () => {
  render(<Time data={data} />);
  const imgTest = screen.getByTestId("imgTest");
  expect(imgTest.tagName).toBe("IMG");
});
