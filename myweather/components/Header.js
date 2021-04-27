import React from "react";
import Image from "next/image";
import { KelvinToCelsius, splitTimeZone } from "../utils/helper";

const Header = ({ data }) => {
  const dateBuilder = (d) => {
    let months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
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

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date}/${month}/${year}`;
  };

  if (!data) return null;

  const { current } = data;

  return (
    <>
      <nav>
        <div className="row nav-wrapper deep-purple lighten-1">
          <div data-testid="weather" className="left col s6 hide-on-small-only">
            <span className="text-nav-left">
              {splitTimeZone(data.timezone)}:{" "}
            </span>
            <strong className="text-nav-left" data-testid="temperature">
              {KelvinToCelsius(current.temp)}º
            </strong>
          </div>
          <div className="center brand-logo">
            <div className="row">
              <Image
                data-testid="img"
                src="https://i.ibb.co/hY2tvgy/logo-My-Weather.png"
                width="25"
                height="25"
                alt="Logo"
                layout="intrinsic"
              />{" "}
              <span className="text-logo"> My Weather</span>
            </div>
          </div>
          <div
            data-testid="date"
            className="right col s2 m1 l1 hide-on-small-only"
          >
            <span className="text-nav-right">{dateBuilder(new Date())}</span>
          </div>
          <div className="right hide-on-small-only">
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
