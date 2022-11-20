let convertToOldRoman = require("./convert-to-old-roman");

describe("convert to old roman", () => {
  it("returns I if passed 1 as an argument", () => {
    expect(convertToOldRoman(1)).toBe("I");
  });

  it("returns VII if passed 7 as an argument", () => {
    expect(convertToOldRoman(7)).toBe("VII");
  });

  it("returns XV if passed 15 as an argument", () => {
    expect(convertToOldRoman(15)).toBe("XV");
  });
});