import React from "react";

const TiempoDetallado = ({ data }) => {
  const KelvinToCelsius = (temp) => {
    return Math.floor(temp - 273);
  };

  const splitTimeZone = (string) => {
    let res = string.split("/");
    return res[1];
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    let time = hour + ":" + formatTime(min);
    return time;
  };

  if (!data) return null;
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
                <div className="col s8 m3 l3">
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
                <div className="col s4 m3 l3">
                  <div className="row">
                    <div className="col s1">
                      <p>
                        <i className="material-icons" data-testid="icon-down">
                          keyboard_arrow_down
                        </i>
                      </p>
                    </div>
                    <div className="col s3 m3 l3">
                      <p>
                        <i className="material-icons" data-testid="icon-sun">
                          wb_sunny
                        </i>
                      </p>
                    </div>
                    <div className="col s3 m3 l3">
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
                      Humedad:
                      <strong data-testid="humidity">
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
                      Presión:{" "}
                      <strong data-testid="pressure">
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
                      Visibilidad:{" "}
                      <strong data-testid="visibility">
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
                      Viento:{" "}
                      <strong data-testid="wind">
                        {current.wind_speed}km/h
                      </strong>
                    </li>
                    <li className="collection-item">
                      <i className="tiny material-icons" data-testid="uv-icon">
                        brightness_high
                      </i>{" "}
                      Índice UV:{" "}
                      <strong data-testid="uv">{current.uvi} de 10</strong>
                    </li>
                    <li className="collection-item">
                      <i
                        className="tiny material-icons"
                        data-testid="feelslike-icon"
                      >
                        ac_unit
                      </i>{" "}
                      Sensación térmica:{" "}
                      <strong data-testid="feelslike">
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
