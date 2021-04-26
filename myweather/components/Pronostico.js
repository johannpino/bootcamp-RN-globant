import React from "react";
import Image from "next/image";

export const Pronostico = ({ data }) => {
  if (!data) {
    return null;
  }
  const currentInfo = data.current;
  const dayInfo = data.hourly;
  const FtoC = (temp) => {
    return Math.floor(temp - 273);
  };
  const KelvinToCelsius = (temp) => {
    return Math.floor(temp - 273);
  };
  const splitWord = (word) => {
    let out = word.split("/");
    return out[1];
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

  return (
    <>
      <div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <div className="row">
                <div className="col s12">
                  <strong>
                    Pronóstico de hoy para {splitWord(data.timezone)}
                  </strong>
                </div>
                <br />
                <div className="col s3">
                  <h3>Mañana</h3> {/*8am*/}
                  <h2 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[9].temp)}º
                  </h2>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[9].weather[0].icon}@2x.png`}
                  ></img>
                  <i className="tiny material-icons" data-testid="pop-icon">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia">{dayInfo[9].pop}%</strong>
                </div>
                <div className="col s3">
                  <h3>Tarde</h3> {/*5pm*/}
                  <h2 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[18].temp)}º
                  </h2>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[18].weather[0].icon}@2x.png`}
                  ></img>
                  <strong data-testid="prob-lluvia">{dayInfo[18].pop}%</strong>
                </div>
                <div className="col s3">
                  <h3>Noche</h3> {/*10pm*/}
                  <h2 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[23].temp)}º
                  </h2>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[23].weather[0].icon}@2x.png`}
                  ></img>
                  <strong data-testid="prob-lluvia">{dayInfo[23].pop}%</strong>
                </div>
                <div className="col s3">
                  <h3>Madrugada</h3> {/*3am*/}
                  <h2 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[28].temp)}º
                  </h2>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[28].weather[0].icon}@2x.png`}
                  ></img>
                  <i className="material-icons" data-testid="icon-sun">
                    wb_sunny
                  </i>
                  <strong data-testid="prob-lluvia">{dayInfo[28].pop}%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
