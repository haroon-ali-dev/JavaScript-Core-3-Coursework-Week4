const verifyPassword = require('./verify-password');

describe("verify password", () => {
  it("returns 'password rejected' if less than 8 characters", () => {
    expect(verifyPassword("pass")).toBe("Password rejected.");
  });

  it("returns 'password rejected' if null", () => {
    expect(verifyPassword(null)).toBe("Password rejected.");
  });

  it("returns 'password rejected' if does not contain at least one upper case letter", () => {
    expect(verifyPassword("password")).toBe("Password rejected.");
  });

  it("returns 'password rejected' if does not contain at least one letter", () => {
    expect(verifyPassword("password2")).toBe("Password rejected.");
  });
});