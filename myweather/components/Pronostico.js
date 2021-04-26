import React from "react";

export const Pronostico = ({ data }) => {
  if (!data) {
    return null;
  }
  const dayInfo = data.hourly;

  const KelvinToCelsius = (temp) => {
    return Math.floor(temp - 273);
  };

  const splitWord = (word) => {
    let out = word.split("/");
    return out[1];
  };

  return (
    <>
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <strong>
                    Pronóstico de hoy para {splitWord(data.timezone)}
                  </strong>
                </div>
                <br />
                <div className="col s3 center">
                  <h4>Mañana</h4> {/*8am*/}
                  <h4 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[9].temp)}º
                  </h4>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[9].weather[0].icon}@2x.png`}
                  ></img>
                  <i className="tiny material-icons" data-testid="pop-icon">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia">{dayInfo[9].pop}%</strong>
                </div>
                <div className="col s3 center">
                  <h4>Tarde</h4> {/*5pm*/}
                  <h4 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[18].temp)}º
                  </h4>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[18].weather[0].icon}@2x.png`}
                  ></img>
                  <i className="tiny material-icons" data-testid="pop-icon">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia">{dayInfo[18].pop}%</strong>
                </div>
                <div className="col s3 center">
                  <h4>Noche</h4> {/*10pm*/}
                  <h4 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[23].temp)}º
                  </h4>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[23].weather[0].icon}@2x.png`}
                  ></img>
                  <i className="tiny material-icons" data-testid="pop-icon">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia">{dayInfo[23].pop}%</strong>
                </div>
                <div className="col s3 center">
                  <h4>Madrugada</h4> {/*3am*/}
                  <h4 data-testid="temperatura">
                    {KelvinToCelsius(dayInfo[28].temp)}º
                  </h4>
                  <img
                    src={`http://openweathermap.org/img/wn/${dayInfo[28].weather[0].icon}@2x.png`}
                  ></img>
                  <i className="tiny material-icons" data-testid="pop-icon">
                    invert_colors
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
