function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var result = [];
  nums.forEach(element => {
    if (element<1) result.push(element);
  });
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var result = [];
  names.forEach(element => {
    if(element.charAt(0)==char)  result.push(element);
  });
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  var result = [];
  words.forEach(element => {
    if(element.startsWith("to ")) result.push(element);
  });
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var result = [];
  nums.forEach(element => {
    if(Number.isInteger(element)) result.push(element);
  });
  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  var result = [];
  users.forEach(element => {     
       result.push( element.data.city.displayName);
  });

  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var result = [];
  nums.forEach(element => { 
  if(Math.round(Math.sqrt(element))){
    result.push(parseFloat(Math.sqrt(element).toFixed(2)));
  }else{
    result.push(Math.sqrt(element));
  }    
  });

  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  var result =[];
  sentences.forEach(element => {
    if(element.match(new RegExp(str, 'i'))) result.push(element);  
  });
  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  var result=[];
  triangles.forEach(element => {
    result.push( Math.max.apply(null, element)) 
  });
  return result;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
