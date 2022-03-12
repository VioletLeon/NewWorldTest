// WRITTEN BY: VIOLET LEON

/**
 * [Will translate roman numeral to an interger]
 * @param  {[string]} string [A string containing roman numerals]
 * @return {[integer]}      [The translated roman numeral]
 */

const romanNumeralTranslate = (string) => {
  if (typeof string !== 'string') return 'Not a string';

  let integer = 0;
  let romanMap = new Map();
  romanMap.set('I', 1);
  romanMap.set('V', 5);
  romanMap.set('X', 10);
  romanMap.set('L', 50);
  romanMap.set('C', 100);
  romanMap.set('D', 500);
  romanMap.set('M', 1000);

  let lastChar = '';
  let currentCount = 0;

  for (let index = 0; index < string.length; index++) {
    const currentValue = romanMap.get(string[index]);
    const nextValue = romanMap.get(string[index + 1]);

    // VALIDATE ROMAN

    if (romanMap.get(string[index]) === undefined)
      return 'Not a valid roman numeral';
    else if (string[index] == lastChar) {
      currentCount++;
      if (currentCount > 3) return 'Not a valid roman numeral';
    } else {
      lastChar = string[index];
      currentCount = 1;
    }

    // CONTINUE IF TRUE

    if (currentValue < nextValue) integer -= currentValue;
    else integer += currentValue;
  }

  return integer;
};

module.exports = romanNumeralTranslate;
