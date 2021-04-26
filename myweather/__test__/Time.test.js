import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Time from "../components/Time";

const data = {
  lat: -34.7634,
  lon: -56.3936,
  timezone: "America/Montevideo",
  timezone_offset: -10800,
  current: {
    dt: 1619381607,
    sunrise: 1619345816,
    sunset: 1619384984,
    temp: 291.96,
    feels_like: 291.78,
    pressure: 1017,
    humidity: 72,
    dew_point: 286.81,
    uvi: 0.43,
    clouds: 40,
    visibility: 10000,
    wind_speed: 6.17,
    wind_deg: 180,
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "nubes dispersas",
        icon: "03d",
      },
    ],
  },
};

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
  expect(timeTest.textContent).toBe("A partir de las 17:13");
});
