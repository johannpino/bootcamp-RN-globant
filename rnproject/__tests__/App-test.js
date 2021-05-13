import { removeAccents, faseActual } from '../App/util/helper'

const testExample = {
  data: [
    { "TestExample": 1 },
    { "TestExample": 1 },
    { "TestExample": 1 },
    ["comuna_residencia", "Santiago"],
    ["1", "4"],
    { "TestExample": 1 },
  ]
}

describe("helper", () => {
  test("Removing accents", () => {
    const word = "Hélló";
    const actual = removeAccents(word);
    const expected = "Hello";
    expect(actual).toEqual(expected);
  });
  test("Removing accents fail", () => {
    const word = "Hélló";
    const actual = removeAccents(word);
    const expected = "Hélló";
    expect(actual).toEqual(expect.not.stringMatching(expected));
  });
  test("Word without accents", () => {
    const word = "Test";
    const actual = removeAccents(word);
    const expected = "Test";
    expect(actual).toEqual(expected);
  });
  test("Comuna Test", () => {
    const faseNow = faseActual('Santiago', testExample);
    const expected = "4";
    expect(faseNow).toEqual(expected);
  });
  test("Comuna Test undefined", () => {
    const faseNow = faseActual('Pica', testExample);
    const expected = undefined;
    expect(faseNow).toEqual(expected);
  });
});

