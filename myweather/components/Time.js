import React from "react";
import Image from "next/image";
const Time = ({ data }) => {
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

  if (!data) {
    return null;
  }
  const { current } = data;
  return (
    <>
      <div className="row">
        <div className="col s12 m14">
          <div className="card horizontal deep-purple lighten-1">
            <div className="card-content white-text">
              <div className="row">
                <div className="col s12">
                  <p className="flow-text" data-testid="titleTest">
                    Tiempo en {splitTimeZone(data.timezone)}
                  </p>
                </div>
                <div className="col s8">
                  <div className="row">
                    <div className="col s12">
                      <p data-testid="timeTest">
                        A partir de las {timeConverter(current.dt)}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s10">
                      <h2 data-testid="temperatureTest">
                        {KelvinToCelsius(current.temp)}°C
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Time;
