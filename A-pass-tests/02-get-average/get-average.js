// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  onlyNumbers = numbers.filter(num => typeof num === "number");
  const total = onlyNumbers.reduce((a, c) => a + c);
  return total / onlyNumbers.length;
}

module.exports = average;
