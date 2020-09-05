const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise007");
  describe("sumDigits", () => {
    test("returns the next number after the given number in the array", () => {
      expect(sumDigits(53)).toBe(8);
      expect(sumDigits(1)).toBe(1);
      expect(sumDigits(22)).toBe(4);
    });
});