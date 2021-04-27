import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import TiempoDetallado from "../components/TiempoDetallado";
import { data } from "./ExampleData";

afterEach(cleanup);

test("<TiempoDetallado/> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TiempoDetallado data={data} />, div);
});

test("<TiempoDetallado/> renders input correctly", () => {
  render(<TiempoDetallado data={data} />);

  //titulo
  const titulo = screen.getByTestId("titulo");
  expect(titulo).toBeInTheDocument();
  expect(titulo.tagName).toBe("STRONG");
  expect(titulo.textContent).toBe("El tiempo en Montevideo hoy");

  //temperatura
  const temp = screen.getByTestId("temperatura");
  expect(temp).toBeInTheDocument();
  expect(temp.tagName).toBe("H2");
  expect(temp.textContent).toBe("21º");

  //icon up
  const iconUp = screen.getByTestId("icon-up");
  expect(iconUp).toBeInTheDocument();
  expect(iconUp.tagName).toBe("I");
  expect(iconUp.textContent).toBe("keyboard_arrow_up");

  //icon sun
  const iconSun = screen.getByTestId("icon-sun");
  expect(iconSun).toBeInTheDocument();
  expect(iconSun.tagName).toBe("I");
  expect(iconSun.textContent).toBe("wb_sunny");

  //icon sun 2
  const iconSun2 = screen.getByTestId("icon-sun-2");
  expect(iconSun2).toBeInTheDocument();
  expect(iconSun2.tagName).toBe("I");
  expect(iconSun2.textContent).toBe("wb_sunny");

  //icon down
  const iconDown = screen.getByTestId("icon-down");
  expect(iconDown).toBeInTheDocument();
  expect(iconDown.tagName).toBe("I");
  expect(iconDown.textContent).toBe("keyboard_arrow_down");

  //sunrise-time
  const sunrise = screen.getByTestId("sunrise-time");
  expect(sunrise).toBeInTheDocument();
  expect(sunrise.tagName).toBe("STRONG");
  expect(sunrise.textContent).toBe("7:24");

  //sunset-time
  const sunset = screen.getByTestId("sunset-time");
  expect(sunset).toBeInTheDocument();
  expect(sunset.tagName).toBe("STRONG");
  expect(sunset.textContent).toBe("18:17");

  //humidity-icon
  const humidityIcon = screen.getByTestId("humidity-icon");
  expect(humidityIcon).toBeInTheDocument();
  expect(humidityIcon.tagName).toBe("I");
  expect(humidityIcon.textContent).toBe("invert_colors");

  //humidity
  const humidity = screen.getByTestId("humidity");
  expect(humidity).toBeInTheDocument();
  expect(humidity.tagName).toBe("STRONG");
  expect(humidity.textContent).toBe(" 49%");

  //pressure-icon
  const pressureIcon = screen.getByTestId("pressure-icon");
  expect(pressureIcon).toBeInTheDocument();
  expect(pressureIcon.tagName).toBe("I");
  expect(pressureIcon.textContent).toBe("compare_arrows");

  //pressure
  const pressure = screen.getByTestId("pressure");
  expect(pressure).toBeInTheDocument();
  expect(pressure.tagName).toBe("STRONG");
  expect(pressure.textContent).toBe("1019mb");

  //visibility-icon
  const visibilityIcon = screen.getByTestId("visibility-icon");
  expect(visibilityIcon).toBeInTheDocument();
  expect(visibilityIcon.tagName).toBe("I");
  expect(visibilityIcon.textContent).toBe("remove_red_eye");

  //visibility
  const visibility = screen.getByTestId("visibility");
  expect(visibility).toBeInTheDocument();
  expect(visibility.tagName).toBe("STRONG");
  expect(visibility.textContent).toBe("10km");

  //wind-icon
  const windIcon = screen.getByTestId("wind-icon");
  expect(windIcon).toBeInTheDocument();
  expect(windIcon.tagName).toBe("I");
  expect(windIcon.textContent).toBe("wrap_text");

  //wind
  const wind = screen.getByTestId("wind");
  expect(wind).toBeInTheDocument();
  expect(wind.tagName).toBe("STRONG");
  expect(wind.textContent).toBe("1.03km/h");

  //uv-icon
  const uvIcon = screen.getByTestId("uv-icon");
  expect(uvIcon).toBeInTheDocument();
  expect(uvIcon.tagName).toBe("I");
  expect(uvIcon.textContent).toBe("brightness_high");

  //uv
  const uv = screen.getByTestId("uv");
  expect(uv).toBeInTheDocument();
  expect(uv.tagName).toBe("STRONG");
  expect(uv.textContent).toBe("0.99");

  //feelslike-icon
  const feelsLikeIcon = screen.getByTestId("feelslike-icon");
  expect(feelsLikeIcon).toBeInTheDocument();
  expect(feelsLikeIcon.tagName).toBe("I");
  expect(feelsLikeIcon.textContent).toBe("ac_unit");

  //feelslike
  const feelslike = screen.getByTestId("feelslike");
  expect(feelslike).toBeInTheDocument();
  expect(feelslike.tagName).toBe("STRONG");
  expect(feelslike.textContent).toBe(" 20º");
});
