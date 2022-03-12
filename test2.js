// WRITTEN BY: VIOLET LEON

const sortWeight = (string) => {
  if (typeof string !== 'string') return 'Not a string';
  if (string === '') return string;

  const dict = new Map();

  let array = string.split(' ');

  for (let num of array) {
    const weightedValue = stringToWeight(num);
    if (typeof weightedValue === 'string')
      return num + ' is not a valid number';
    dict.set(num, weightedValue);
  }

  // Sort Map Array by Values or String if multiple, then return as a string

  return [...dict]
    .sort((a, b) => {
      if (a[1] == b[1]) return String(a[0]).localeCompare(b[0]);
      else return a[1] - b[1];
    })
    .map((dictArray) => dictArray[0])
    .join(' ');
};

function stringToWeight(string) {
  let weightedValue = 0;

  for (let char of string) {
    weightedValue += +char;
  }

  if (!Number(weightedValue)) return '';

  return weightedValue;
}

module.exports = sortWeight;
