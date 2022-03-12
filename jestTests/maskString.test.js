// WRITTEN BY: VIOLET LEON

const { expect, describe, test } = require('@jest/globals');
const maskString = require('../test1');

// MASK STRING TESTS ( TEST #1 )
describe('Original Test Case', () => {
  test('(F3f213h82r3 should equal F3f21*h**r*)', () => {
    expect(maskString('F3f213h82r3')).toBe('F3f21*h**r*');
  });
});

describe('Empty String', () => {
  test('Empty string should equal ""', () => {
    expect(maskString('')).toBe('');
  });
});

describe('Validating Input', () => {
  const cases = [[43231], ['string'], { string: 'string' }];
  const expectedResult = 'Not a string';

  test.each(cases)(
    `Given %p as an argument, return ${expectedResult}`,
    (argument) => {
      const result = maskString(argument);
      expect(result).toBe(expectedResult);
    }
  );
});

describe("Mutate all ints if there's less than 4", () => {
  const cases = [
    ['1', '*'],
    ['A1B2C3', 'A*B*C*'],
    ['123', '***'],
    [
      '12ACBDJKDLSJAKLDJSAKLJIATJUOAIJAIJRIOASFJAIOFJAIO',
      '**ACBDJKDLSJAKLDJSAKLJIATJUOAIJAIJRIOASFJAIOFJAIO',
    ],
    [
      '12JFIOAIJADKLASJDAKLJAKSLDJAKJLDAJIO3',
      '**JFIOAIJADKLASJDAKLJAKSLDJAKJLDAJIO*',
    ],
  ];

  test.each(cases)(
    'given %p as an arguement, returns %p',
    (arguement, expectedResult) => {
      const result = maskString(arguement);
      expect(result).toBe(expectedResult);
    }
  );
});

describe('No mutations if there are no ints', () => {
  const cases = [
    ['FASDAOKAPOK', 'FASDAOKAPOK'],
    ['Hello World', 'Hello World'],
    ['Pokemon', 'Pokemon'],
    ['Star Wars', 'Star Wars'],
    ['Infinity', 'Infinity'],
  ];
  test.each(cases)(
    'given %p as an arguement, returns %p',
    (arguement, expectedResult) => {
      const result = maskString(arguement);
      expect(result).toBe(expectedResult);
    }
  );
});

describe('No mutations on special characters', () => {
  const cases = [
    ['FASDAO?@#!APOK', 'FASDAO?@#!APOK'],
    ['Hello%$#Wo***r(l)d', 'Hello%$#Wo***r(l)d'],
    ['#@!#@!$123*&%^&%)(5231', '#@!#@!$123*&%^&%)(****'],
    ['123***', '******'],
  ];
  test.each(cases)(
    'given %p as an arguement, returns %p',
    (arguement, expectedResult) => {
      const result = maskString(arguement);
      expect(result).toBe(expectedResult);
    }
  );
});
