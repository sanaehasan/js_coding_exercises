function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var result = word.charAt(0).toUpperCase() + word.slice(1);
  return result;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
   var first = firstName.charAt(0).toUpperCase();
   var last = lastName.charAt(0).toUpperCase();
    return first+'.'+last;

}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  var vat = originalPrice*(vatRate/100)+originalPrice;

  if (Number.isInteger(vat)==true){
    return vat;
  }else{
  return (parseFloat(vat.toFixed(2)));
  }
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  price = originalPrice-(reduction*originalPrice/100);
  if (Number.isInteger(price)==true){
    return price;
  }else{
  return (parseFloat(price.toFixed(2)));
  }
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  if (str.length%2==0){
    return str.substr(str.length/2-1,2);
  }else{
    return str.substr(Math.ceil(str.length/2-1),1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  for (var i=0; i<words.length;i++){
    words[i]=words[i].split("").reverse().join("");
  }
  return words;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  var count =0;
  users.forEach(element => {
   if( element.type=="Linux") count++;
  });
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var sum =scores.reduce((a,b)=>a+b,0);
  
  var result = sum/scores.length;

  if (Math.round(result)==true){
    return result;
  }else{
  return (parseFloat(result.toFixed(2)));
  }
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (n%3==0 && n%5==0){
    return "fizzbuzz";
  }else if(n%3==0 ){
    return "fizz";
  }else if(n%5==0){
    return "buzz";
  }else{
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
