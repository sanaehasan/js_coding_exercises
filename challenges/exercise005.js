const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  if(nums.indexOf(n)==-1 || nums.indexOf(n)+1 >= nums.length ){
       return null;
  }else{
    return nums[nums.indexOf(n)+1];
   
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var ones = str.match(/1/g||[]);
  var zeros = str.match(/0/g||[]);
  if(!ones) ones =[];
  if(!zeros) zeros=[];
  return {"0":zeros.length,"1":ones.length};

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseInt(n.toString().split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  var result =0;
  arrs.forEach(element => {
    result+=element.reduce((a, b) => a + b, 0);
  });
  return result;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if(arr.length>1){
  var first= arr[0];
  var end = arr[arr.length-1];
  arr[0]=end;
  arr[arr.length-1]=first;
}
  return arr;
  
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  var obj = Object.values(haystack);
  if(obj.join(" ").match(new RegExp(searchTerm, 'i'))){
    return true
  }else{
    return false;
  }
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  str= str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
  str=str.toLowerCase();
  var table = str.split(" ");
  var result = {};
  if(table && table.length){
  for(var i =0; i<table.length ;i++){
    if(table[i]!=''){
    var tab =str.match(new RegExp(table[i], 'g') ||[]);
    
    console.log(tab);
    result[table[i]]=tab.length;
    str=str.replace(table[i],"").trim();
    if(str.include(" ")){
    table = str.split(" "); 
    }
    }
  }
}

  return result;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
