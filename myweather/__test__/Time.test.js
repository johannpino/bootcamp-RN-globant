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
  daily: [
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 275.09,
        max: 284.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
  ],
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

test("<Time/> Actual temperature exists", () => {
  render(<Time data={data} />);
  const temperatureTest = screen.getByTestId("temperatureTest");
  expect(temperatureTest).toBeInTheDocument();
});

test("<Time/> Correct temperature tag", () => {
  render(<Time data={data} />);
  const temperatureTest = screen.getByTestId("temperatureTest");
  expect(temperatureTest.tagName).toBe("H2");
});

test("<Time/> Correct temperature content", () => {
  render(<Time data={data} />);
  const temperatureTest = screen.getByTestId("temperatureTest");
  expect(temperatureTest.textContent).toBe("18°C");
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
  expect(descriptionTest.textContent).toBe("nubes dispersas");
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
  expect(minTempTest.textContent).toBe("min: 2°C");
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
  expect(maxTempTest.textContent).toBe("max: 11°C");
});
