const { RuleTester } = require("eslint");

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  var multiples=[];
  arr.forEach(element => {
    if(element%3==0 || element%5==0) multiples.push(element);
  });
  return multiples.reduce((a, b) => a + b, 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  var arr = str.split("");
  var result = false;
  if(str.match(/A|T|G|C/g) && str.match(/A|T|G|C/g).length== arr.length ) result = true;
  return result;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  var tab = str.split("");
  var i =0;
 for (var i=0; i<tab.length ; i++){
    if(tab[i]=='A') {tab[i]='T'; continue;}
    if(tab[i]=='T'){ tab[i]='A'; continue;}
    if(tab[i]=='C') {tab[i]='G'; continue;}
    if(tab[i]=='G') {tab[i]='C'; continue;}
 }
 return tab.join("");  
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  var isprime = true;
  for(var i =2; i<n ;i++){
    if(n%i==0){
      isprime=false;
    }
  }
  return isprime;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  var arr = [];
  for (i=0;i<n ;i++){
    var tab = new Array(n);
    tab.fill(fill);
    arr.push(tab);
  }
  return arr;
  
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  var covered = false;
  var count =0;
  staff.forEach(elt=>{
  if( elt.rota.indexOf(day)>-1) count++;
  })
  if (count >=3) covered=true;
  return covered;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
