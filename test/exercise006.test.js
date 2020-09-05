const {
    sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
  } = require("../challenges/exercise006");
  describe("This function will receive an array of numbers and should return the sum of multiples of 5 and 8", () => {
    test("returns sumMultiples", () => {
      let arr1 = [3,5];
      
      expect(sumMultiples(arr1)).toEqual(8);
  
      arr1 = [10, 9];
    
      expect(sumMultiples(arr1)).toEqual(19);
    });
  });
  describe("getBusNumbers", () => {
    
    test("return true/false depending on whether it is a valid DNA string", () => {
      expect(isValidDNA("LSWWWFWFDDDDF")).toBe(false);
      expect(isValidDNA("CGTACCT")).toBe(true);
      expect(isValidDNA("DJDDKDODFQSACCT")).toBe(false);
    });
  });