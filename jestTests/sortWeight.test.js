// WRITTEN BY: VIOLET LEON

const { expect, test, describe } = require('@jest/globals');
const sortWeight = require('../test2');

// MASK SORT WEIGHT ( TEST #2 )

describe('Original Test Cases', () => {
  test('"56 65 74 100 99 68 86 180 90" should equal "100 180 90 56 65 74 68 86 99"', () => {
    expect(sortWeight('56 65 74 100 99 68 86 180 90')).toBe(
      '100 180 90 56 65 74 68 86 99'
    );
  });
});

describe('Should only accept strings', () => {
  const cases = [
    ['10', '20', '30', '40', '50'],
    { string: 10 },
    10,
    [10, 20, 30, 40, 50],
  ];
  const expectedResult = 'Not a string';

  test.each(cases)(
    `given %p as argument should return ${expectedResult}`,
    (argument) => {
      const result = sortWeight(argument);
      expect(result).toBe(expectedResult);
    }
  );
});

describe('Validate Numbers', () => {
  const cases = [
    ['-10 20 H20', '-10'],
    ['20W 340 250', '20W'],
    ['w', 'w'],
    ['?', '?'],
  ];
  test.each(cases)(
    'given %p as arguement should return "is not a valid number"',
    (argument, expectedResult) => {
      const result = sortWeight(argument);
      expect(result).toBe(`${expectedResult} is not a valid number`);
    }
  );
});

describe('Sort based on string comparison if weighted values are the same', () => {
  const cases = [
    ['1 90 10 100 1000 180', '1 10 100 1000 180 90'],
    [
      '100 1000 10000 00001 0001 001 01 1',
      '00001 0001 001 01 1 100 1000 10000',
    ],
    ['2 200 20 20000 1001 2000000 11', '1001 11 2 20 200 20000 2000000'],
  ];
  test.each(cases)(
    'given %p as arguement should return %p',
    (argument, expectedResult) => {
      const result = sortWeight(argument);
      expect(result).toBe(expectedResult);
    }
  );
});

describe('One int should return the one int', () => {
  const cases = [
    ['1', '1'],
    ['20', '20'],
    ['200', '200'],
    ['2000000000000000000000000000', '2000000000000000000000000000'],
  ];
  test.each(cases)(
    'given %p as arguement should return %p',
    (argument, expectedResult) => {
      const result = sortWeight(argument);
      expect(result).toBe(expectedResult);
    }
  );
});

test('Empty string should return an empty string', () => {
  expect(sortWeight('')).toBe('');
});
