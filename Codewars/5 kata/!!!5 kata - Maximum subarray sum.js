// Return sum of [4 -1 2 1]
var maxSequence = function(arr){
  return  arr.reduce((acc, cur) => acc + cur, 0)
}

// console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), ": 6");

// NOT WORK