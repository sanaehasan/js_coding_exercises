
function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  var result = nums.map(value=>Math.pow(value,2));
  return result;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  for (var i = 1; i< words.length; i++ ){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);;
  }
 return words.join("");

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var count =0;
  people.forEach(element => {
    if(element.subjects!==undefined && element.subjects.length) count=count+element.subjects.length;
  });
 return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  var result = false;
  menu.forEach(element => {
    if(element.ingredients.includes(ingredient)) result = true;
  });
  return result;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  var result = [];
  arr1.forEach(element => {
    arr2.forEach(val=>{
      if (element == val && !result.includes(val))  result.push(val);
    });
  });
  return result.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
