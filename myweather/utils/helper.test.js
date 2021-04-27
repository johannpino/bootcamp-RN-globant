import {
  KelvinToCelsius,
  splitTimeZone,
  formatTime,
  timeConverter,
} from "./helper";

const expect = global.expect;

describe("helper", () => {
  test("From Kelvin to Celcius", () => {
    const temperature = 292;
    const actual = KelvinToCelsius(temperature);
    const expected = 19;
    expect(actual).toEqual(expected);
  });
  test("Split the time zone", () => {
    const timeZone = "America/Santiago";
    const actual = splitTimeZone(timeZone);
    const expected = "Santiago";
    expect(actual).toEqual(expected);
  });
  test("Change the format Time less than cero", () => {
    const time = "7";
    const actual = formatTime(time);
    const expected = "07";
    expect(actual).toEqual(expected);
  });
  test("Change the format Time more than nine", () => {
    const time = "10";
    const actual = formatTime(time);
    const expected = "10";
    expect(actual).toEqual(expected);
  });
  test("Change from unix to date", () => {
    const time = "1619381607";
    const actual = timeConverter(time);
    const expected = "17:13";
    expect(actual).toEqual(expected);
  });
});
