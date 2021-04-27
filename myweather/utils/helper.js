export const KelvinToCelsius = (temp) => {
  return Math.floor(temp - 273);
};

export const splitTimeZone = (string) => {
  let res = string.split("/");
  return res[1];
};

export const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const timeConverter = (UNIX_timestamp) => {
  let a = new Date(UNIX_timestamp * 1000);
  let hour = a.getHours();
  let min = a.getMinutes();
  let time = `${hour}:${formatTime(min)}`;
  return time;
};

export const capitalizeFirstLetter = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};
