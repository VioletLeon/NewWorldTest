// WRITTEN BY: VIOLET LEON

const { expect, test, describe } = require('@jest/globals');
const romanNumeralTranslate = require('./test3');

// MASK SORT WEIGHT ( TEST #3 )

describe('Original Test Cases', () => {
  const cases = [
    ['MCMXC', 1990],
    ['MMVIII', 2008],
    ['MDCLXVI', 1666],
  ];
  test.each(cases)(
    `Given %p as an argument, return %p`,
    (argument, expectedResult) => {
      const result = romanNumeralTranslate(argument);
      expect(result).toBe(expectedResult);
    }
  );
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
    'given %p as argument should return "Not a string"',
    (argument) => {
      const result = romanNumeralTranslate(argument);
      expect(result).toBe(expectedResult);
    }
  );
});

test('Empty string should return 0', () => {
  expect(romanNumeralTranslate('')).toBe(0);
});

describe('Validate Roman Numeral', () => {
  const cases = ['IIII', 'VVVV', 'CCCC', 'XXXX', 'TXXX'];
  const expectedResult = 'Not a valid roman numeral';

  test.each(cases)(
    'given %p as argument should return "Not a valid roman numeral"',
    (argument) => {
      const result = romanNumeralTranslate(argument);
      expect(result).toBe(expectedResult);
    }
  );
});

describe('Large Roman Numerals', () => {
  const cases = [
    ['CCCLXVIII', 368],
    ['CCCLXXXII', 382],
    ['CDLXXXVIII', 488],
    ['DCCCLXVIII', 868],
    ['DCCCLXXXIX', 889],
  ];

  test.each(cases)(
    'given %p as argument should return %p',
    (argument, expectedResult) => {
      const result = romanNumeralTranslate(argument);
      expect(result).toBe(expectedResult);
    }
  );
});
