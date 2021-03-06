// WRITTEN BY: VIOLET LEON

/**
 * [Will mask the last 4 numbers in a string with "*"]
 * @param  {[string]} arg1 [A string with characters are numbers]
 * @return {[string]}      [Mutated string with the last 4 numbers masked]
 */

const maskString = (string) => {
  if (typeof string !== 'string') return 'Not a string';

  let maskingRequired = 4;
  let numbersSet = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);

  for (let index = string.length - 1; index >= 0; index--) {
    if (numbersSet.has(string.charAt(index)) && maskingRequired > 0) {
      string = string.substring(0, index) + '*' + string.substring(index + 1);
      maskingRequired--;
    }
  }

  return string;
};

module.exports = maskString;
