const add = require("./add");

describe("string calculator", () => {
  it("should return 0 if no numbers present", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number if one number", () => {
    expect(add("5")).toBe(5);
  });

  it("should return sum of numbers if two numbers", () => {
    expect(add("5")).toBe(5);
  });

  it("should return sum of numbers if unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  it("should ignore numbers larger than 1000", () => {
    expect(add("1,2,3,4,5,1000,2000")).toBe(1015);
  });

  it("should throw error if any negative numbers", () => {
    expect(() => { add("1,2,3,4,5,-1,-2,-3"); }).toThrow("Negatives not allowed: -1,-2,-3");
  });
});