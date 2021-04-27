import React from "react";

export const Pronostico = ({ data }) => {
  if (!data) {
    return null;
  }
  const hourInfo = data.hourly;

  const KelvinToCelsius = (temp) => {
    return Math.floor(temp - 273);
  };

  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    let time = hour + ":" + formatTime(min);
    return time;
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <>
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <strong data-testid="title">Pronóstico por hora</strong>
                </div>
              </div>
              <div className="row">
                <div className="col s3 time-of-day time-of-day-border">
                  <h5 className="bold" data-testid="title-now">
                    Ahora
                  </h5>
                  <h4 className="bold" data-testid="temp1">
                    {KelvinToCelsius(hourInfo[0].temp)}º
                  </h4>
                  <img
                    data-testid="icon1"
                    src={`http://openweathermap.org/img/wn/${hourInfo[0].weather[0].icon}@2x.png`}
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon1">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia1">{hourInfo[0].pop}%</strong>
                </div>
                <div className="col s3 time-of-day time-of-day-border">
                  <h5 data-testid="title2">{timeConverter(hourInfo[1].dt)}</h5>
                  <h4 data-testid="temp2">
                    {KelvinToCelsius(hourInfo[1].temp)}º
                  </h4>
                  <img
                    data-testid="icon2"
                    src={`http://openweathermap.org/img/wn/${hourInfo[1].weather[0].icon}@2x.png`}
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon2">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia2">{hourInfo[1].pop}%</strong>
                </div>
                <div className="col s3 time-of-day time-of-day-border">
                  <h5 data-testid="title3">{timeConverter(hourInfo[2].dt)}</h5>
                  <h4 data-testid="temp3">
                    {KelvinToCelsius(hourInfo[2].temp)}º
                  </h4>
                  <img
                    data-testid="icon3"
                    src={`http://openweathermap.org/img/wn/${hourInfo[2].weather[0].icon}@2x.png`}
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon3">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia3">{hourInfo[2].pop}%</strong>
                </div>
                <div className="col s3 time-of-day">
                  <h5 data-testid="title4">{timeConverter(hourInfo[3].dt)}</h5>
                  <h4 data-testid="temp4">
                    {KelvinToCelsius(hourInfo[3].temp)}º
                  </h4>
                  <img
                    data-testid="icon4"
                    src={`http://openweathermap.org/img/wn/${hourInfo[3].weather[0].icon}@2x.png`}
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon4">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia4">{hourInfo[3].pop}%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
