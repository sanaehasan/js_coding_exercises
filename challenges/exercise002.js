function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if(person.city=="Manchester") return true;
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return Math.ceil(people/40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var count =0;
  arr.forEach(element => {
    if (element == "sheep") count++;
  });
  return count;
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
 if(person.postCode.charAt(0)=="M" ) return true;
 return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
