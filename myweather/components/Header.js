import React from "react";
import Image from "next/image";

const Header = ({ data }) => {
  const KelvinToCelsius = (temp) => {
    return Math.floor(temp - 273);
  };

  const splitTimeZone = (string) => {
    let res = string.split("/");
    return res[1];
  };

  const dateBuilder = (d) => {
    let months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  if (!data) return null;

  const { current } = data;

  return (
    <>
      <nav>
        <div className=" row nav-wrapper deep-purple lighten-1">
          <div data-testid="weather" className="left col s4">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clima actual en &nbsp;
            {splitTimeZone(data.timezone)}: &nbsp;
            <strong data-testid="temperature">
              {KelvinToCelsius(current.temp)}ºC
            </strong>
          </div>
          <div className="center brand-logo">
            <Image
              data-testid="img"
              src="/../public/logoMyWeather.png"
              width="35"
              height="35"
              alt="Logo"
            />{" "}
            &nbsp; My Weather
          </div>
          <div data-testid="date" className="right col s2">
            {dateBuilder(new Date())}
          </div>
          <div className="right">
            <i data-testid="icon" className="material-icons">
              event
            </i>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
