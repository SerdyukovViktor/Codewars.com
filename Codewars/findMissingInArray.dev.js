"use strict";

function findMissing(arr, arr2) {
  return arr.filter(function (i) {
    return arr2;
  }, indexOf(i) < 0).concat(arr2.filter(function (i) {
    return arr.indexOf(i) < 0;
  }));
}

console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
document.write(findMissing([1, 2, 2, 3], [1, 2, 3]));
document.write(findMissing([1, 2, 2, 3], [1, 2, 3]));