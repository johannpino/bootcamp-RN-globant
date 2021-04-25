import React from "react";
const TiempoDetallado = ({ data }) => {
  const FtoC = (temp) => {
    return Math.floor(temp - 273);
  };

  const splitDate = (string) => {
    let res = string.split("/");
    return res[1];
  };

  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // var year = a.getFullYear();
    // var month = months[a.getMonth()];
    // var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    let time = hour + ":" + min + ":" + sec;
    return time;
  };

  if (!data) return null;
  const { current } = data;
  return (
    <>
      <div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <div className="row">
                <div className="col s12">
                  <strong>El tiempo en {splitDate(data.timezone)} hoy</strong>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <div className="col s6">
                  <h1>{FtoC(current.temp)}º</h1>
                </div>
                <div className="col s6">
                  <p>
                    Amanecer: <strong>{timeConverter(current.sunrise)}</strong>
                  </p>
                  <p>
                    Atardecer: <strong>{timeConverter(current.sunset)}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <div className="col s6">
                  <ul class="collection">
                    <li class="collection-item">
                      Humedad
                      <strong> {current.humidity}</strong>%
                    </li>
                    <li class="collection-item">
                      Presión <strong> {current.humidity}mb</strong>
                    </li>
                    <li class="collection-item">
                      Visibilidad <strong>{current.visibility / 1000}km</strong>
                    </li>
                  </ul>
                </div>
                <div className="col s6">
                  <ul class="collection">
                    <li class="collection-item">
                      Viento <strong>{current.wind_speed}km/h</strong>
                    </li>
                    <li class="collection-item">
                      Índice UV <strong>{current.uvi} de 10</strong>
                    </li>
                    <li class="collection-item">
                      Sensación térmica{" "}
                      <strong>{FtoC(current.feels_like)}º</strong>
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
