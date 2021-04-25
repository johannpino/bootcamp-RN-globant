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
      <div className="col s12">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <strong>
                    El tiempo en {splitTimeZone(data.timezone)} hoy
                  </strong>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s4">
                  <h2>{KelvinToCelsius(current.temp)}º</h2>
                </div>
                <div className="col s3">
                  <div className="row">
                    <div className="col s1">
                      <p>
                        <i className="material-icons">keyboard_arrow_up</i>
                      </p>
                    </div>
                    <div className="col s3">
                      <p>
                        <i className="material-icons">wb_sunny</i>
                      </p>
                    </div>
                    <div className="col s3">
                      <p>
                        <strong>{timeConverter(current.sunrise)}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col s3">
                  <div className="row">
                    <div className="col s1">
                      <p>
                        <i className="material-icons">keyboard_arrow_down</i>
                      </p>
                    </div>
                    <div className="col s3">
                      <p>
                        <i className="material-icons">wb_sunny</i>
                      </p>
                    </div>
                    <div className="col s3">
                      <p>
                        <strong>{timeConverter(current.sunset)}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  p {
                    margin-top: 1rem;
                    padding-left: 1rem;
                  }
                  h2 {
                    margin-top: -1rem;
                  }
                `}</style>
              </div>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s6">
                  <ul className="collection">
                    <li className="collection-item">
                      <i className="tiny material-icons"> invert_colors</i>{" "}
                      Humedad:
                      <strong> {current.humidity}</strong>%
                    </li>
                    <li className="collection-item">
                      <i className="tiny material-icons"> compare_arrows</i>{" "}
                      Presión: <strong> {current.humidity}mb</strong>
                    </li>
                    <li className="collection-item">
                      <i className="tiny material-icons"> remove_red_eye</i>{" "}
                      Visibilidad:{" "}
                      <strong>{current.visibility / 1000}km</strong>
                    </li>
                  </ul>
                </div>
                <div className="col s6">
                  <ul className="collection">
                    <li className="collection-item">
                      <i className="tiny material-icons"> wrap_text</i> Viento:{" "}
                      <strong>{current.wind_speed}km/h</strong>
                    </li>
                    <li className="collection-item">
                      <i className="tiny material-icons"> brightness_high</i>{" "}
                      Índice UV: <strong>{current.uvi} de 10</strong>
                    </li>
                    <li className="collection-item">
                      <i className="tiny material-icons"> ac_unit</i> Sensación
                      térmica:{" "}
                      <strong>{KelvinToCelsius(current.feels_like)}º</strong>
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
