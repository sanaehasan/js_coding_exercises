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
  describe("isValidDNA", () => {
    
    test("return true/false depending on whether it is a valid DNA string", () => {
      expect(isValidDNA("LSWWWFWFDDDDF")).toBe(false);
      expect(isValidDNA("CGTACCT")).toBe(true);
      expect(isValidDNA("DJDDKDODFQSACCT")).toBe(false);
    });
  });
  describe("getComplementaryDNA", () => {
    
    test("return getComplementary DNA  string", () => {
      expect(getComplementaryDNA("ATGC")).toBe("TACG");
      expect(getComplementaryDNA("CGTACCT")).toBe("GCATGGA");
      
    });
  });

  describe("isItPrime", () => {

  test("return true/false depending on whether n is Prime", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(18)).toBe(false);
  });
});

describe("This function should receive a number and return an array of n arrays, each filled with n items.", () => {
  test("createMatrix", () => {
    expect(createMatrix(2,"foo")).toEqual([["foo","foo"],["foo","foo"]]);
    expect(createMatrix(3,"foo")).toEqual([["foo","foo","foo"],["foo","foo","foo"],["foo","foo","foo"]]);   
  });
});

describe("For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day", () => {
  test("areWeCovered", () => {
    const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "loren", rota: ["Monday", "Wednesday", "Friday"] },
    { name: "tom", rota: ["Monday", "Tuesday", "Thursday"] },
    { name: "billy", rota: [ "Tuesday", "Friday"] },
  ];
    
    expect(areWeCovered(staff,"Monday")).toBe(true);

    const staff2 = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "loren", rota: ["Monday", "Wednesday", "Friday"] },
    { name: "tom", rota: ["Monday", "Tuesday", "Thursday"] },
    { name: "billy", rota: [ "Monday", "Friday"] },
  ];
    
  
    expect(areWeCovered(staff2,"Tuesday")).toBe(false);
  });
});