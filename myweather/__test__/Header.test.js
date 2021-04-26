import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen} from "@testing-library/react";
import Header from "../components/Header";

const data = {
    lat: -33.4362,
    lon: -70.6574,
    timezone: "America/Santiago",
    timezone_offset: -14400,
    current: {
      dt: 1619458145,
      temp: 291.96,
      feels_like: 295.48,
    },
  }

 test("<Header/> renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header/>, div);
  });

  test("renders an image", () => {
  const { getByTestId } = render(<Header/>);
  expect(getByTestId("img")).toBeDefined();
  });

  test("<Header/> Image exists", () => {
    render(<Header data={data} />);
    const imgTest = screen.getByTestId("img");
    expect(imgTest).toBeInTheDocument();
  });
  
  test("<Header/> Correct image tag", () => {
    render(<Header data={data} />);
    const imgTest = screen.getByTestId("img");
    expect(imgTest.tagName).toBe("IMG");
  });

  test("<Header/> renders input correctly", () => {
    render(<Header data={data} />);
  
    //Weather
    const weather = screen.getByTestId("weather");
    expect(weather).toBeInTheDocument();
    expect(weather.tagName).toBe("DIV");
    expect(weather.textContent).toBe("Clima actual en Santiago:");
  
    //Temperature
    const temp = screen.getByTestId("temperature");
    expect(temp).toBeInTheDocument();
    expect(temp.tagName).toBe("STRONG");
    expect(temp.textContent).toBe("18º");
  
    //Img
    const img = screen.getByTestId("img");
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe("IMAGE");
  
    //Date
    const date = screen.getByTestId("date");
    expect(date).toBeInTheDocument();
    expect(date.tagName).toBe("DIV");
    expect(date.textContent).toBe("Lunes 26 de abril 2020");
  
    //Icon 
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.tagName).toBe("I");
    expect(icon.textContent).toBe("event");
  });