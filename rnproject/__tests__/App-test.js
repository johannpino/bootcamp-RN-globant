import { removeAccents } from '../App/util/helper'

describe("helper", () => {
  test("Removing accents", () => {
    const word = "Hélló";
    const actual = removeAccents(word);
    const expected = "Hello";
    expect(actual).toEqual(expected);
  });
});

