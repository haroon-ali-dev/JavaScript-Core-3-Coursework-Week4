function add(string) {
  if (!string) return 0;
  if (string.length === 1) return Number(string);

  const numbers = string.split(",").map(char => Number(char));
  const anyNegatives = numbers.some(num => num < 0);
  if (anyNegatives) throw new Error(`Negatives not allowed: ${numbers.filter(num => num < 0).join(",")}`);

  return numbers.reduce((a, c) => c <= 1000 ? a + c : a + 0, 0);
}

module.exports = add;