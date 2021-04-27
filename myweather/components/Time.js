import React from "react";
import {
  KelvinToCelsius,
  splitTimeZone,
  timeConverter,
  capitalizeFirstLetter,
} from "../utils/helper";

const Time = ({ data }) => {
  if (!data) {
    return null;
  }
  const { current } = data;
  const [day] = data.daily;

  return (
    <>
      <div className="card horizontal deep-purple lighten-1">
        <div className="card-content white-text">
          <div className="row">
            <div className="col s6">
              <p className="flow-text" data-testid="titleTest">
                Tiempo en {splitTimeZone(data.timezone)}
              </p>
              <p data-testid="timeTest" className="low-opacity">
                A partir de las {timeConverter(current.dt)}
              </p>
            </div>
            <div className="col s6">
              <img
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                data-testid="imgTest"
              ></img>
            </div>
          </div>
          <div className="row">
            <div className="col s8">
              <strong data-testid="temperatureTest">
                {KelvinToCelsius(current.temp)}°
              </strong>
              <p data-testid="minTempTest">
                Min: {KelvinToCelsius(day.temp.min)}°
              </p>
              <p data-testid="maxTempTest">
                Max: {KelvinToCelsius(day.temp.max)}°
              </p>
            </div>
            <div className="col s4">
              <h5 data-testid="descriptionTest">
                {capitalizeFirstLetter(current.weather[0].description)}
              </h5>
              <p data-testid="rainTest">
                {day.pop}% probabilidad de lluvia en el día
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        img {
          margin-left: 10rem;
        }
        strong {
          font-size: 3rem;
        }
      `}</style>
    </>
  );
};

export default Time;
