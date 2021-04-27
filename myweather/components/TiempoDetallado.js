import React from "react";
import { KelvinToCelsius, splitTimeZone, timeConverter } from "../utils/helper";
const TiempoDetallado = ({ data }) => {
  if (!data) return null; //.
  const { current } = data;
  return (
    <>
      <div>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <strong data-testid="titulo">
                    El tiempo en {splitTimeZone(data.timezone)} hoy
                  </strong>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s12 m6 l6">
                  <h2 data-testid="temperatura" className="temp-detallado">
                    {KelvinToCelsius(current.temp)}º
                  </h2>
                </div>
                <div className="col s6 m3 l3">
                  <div className="row">
                    <div className="col s2 m2 l2">
                      <p>
                        <i className="material-icons" data-testid="icon-up">
                          keyboard_arrow_up
                        </i>
                      </p>
                    </div>
                    <div className="col s3 m3 l3">
                      <p>
                        <i className="material-icons" data-testid="icon-sun-2">
                          wb_sunny
                        </i>
                      </p>
                    </div>
                    <div className="col s3 m3 l3">
                      <p>
                        <strong data-testid="sunrise-time">
                          {timeConverter(current.sunrise)}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col s5 m3 l3">
                  <div className="row">
                    <div className="col s2">
                      <p>
                        <i className="material-icons" data-testid="icon-down">
                          keyboard_arrow_down
                        </i>
                      </p>
                    </div>
                    <div className="col s4 m3 l3">
                      <p>
                        <i className="material-icons" data-testid="icon-sun">
                          wb_sunny
                        </i>
                      </p>
                    </div>
                    <div className="col s4 m3 l3">
                      <p>
                        <strong data-testid="sunset-time">
                          {timeConverter(current.sunset)}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content ">
              <div className="row no-margin">
                <div className="col s6">
                  <ul className="collection">
                    <li className="collection-item">
                      <i
                        className="tiny material-icons"
                        data-testid="humidity-icon"
                      >
                        invert_colors
                      </i>{" "}
                      <span className="hide-on-small-only">Humedad:</span>
                      <strong
                        className="collection-number"
                        data-testid="humidity"
                      >
                        {" "}
                        {current.humidity}%
                      </strong>
                    </li>
                    <li className="collection-item">
                      <i
                        className="tiny material-icons"
                        data-testid="pressure-icon"
                      >
                        compare_arrows
                      </i>{" "}
                      <span className="hide-on-small-only">Presión: </span>
                      <strong
                        className="collection-number"
                        data-testid="pressure"
                      >
                        {current.pressure}mb
                      </strong>
                    </li>
                    <li className="collection-item">
                      <i
                        className="tiny material-icons"
                        data-testid="visibility-icon"
                      >
                        remove_red_eye
                      </i>{" "}
                      <span className="hide-on-small-only">Visibilidad: </span>
                      <strong
                        className="collection-number"
                        data-testid="visibility"
                      >
                        {current.visibility / 1000}km
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="col s6">
                  <ul className="collection">
                    <li className="collection-item">
                      <i
                        className="tiny material-icons"
                        data-testid="wind-icon"
                      >
                        wrap_text
                      </i>{" "}
                      <span className="hide-on-small-only">Viento: </span>
                      <strong className="collection-number" data-testid="wind">
                        {current.wind_speed}km/h
                      </strong>
                    </li>
                    <li className="collection-item">
                      <i className="tiny material-icons" data-testid="uv-icon">
                        brightness_high
                      </i>{" "}
                      <span className="hide-on-small-only">Índice UV: </span>
                      <strong className="collection-number" data-testid="uv">
                        {current.uvi}
                      </strong>
                    </li>
                    <li className="collection-item">
                      <i
                        className="tiny material-icons"
                        data-testid="feelslike-icon"
                      >
                        ac_unit
                      </i>{" "}
                      <span className="hide-on-small-only">
                        Sensación térmica:
                      </span>
                      <strong
                        data-testid="feelslike"
                        className="collection-number"
                      >
                        {" "}
                        {KelvinToCelsius(current.feels_like)}º
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiempoDetallado;
