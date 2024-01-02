// // ver 1
// function index(arr, n) {
//     let val = arr[n];
//     return (arr.length < n) ? '-1' : val ** n;
// }

// console.log(index([1, 3, 10, 100], 3));

//// ver 2
// const index2 = (array, m) =>
// array.length > m ? array[m]** m : -1;

// console.log(index2([15, 13, 18, 100], 3));

//ver 3

const index3 = (mass, k) =>
mass.length < k || k < 0 ? -1 : mass[k]** k;

console.log(index3([15, 13, 18, 100], -2));
console.log(index3([15, 13, 18, 100], 2));
console.log(index3([15, 13, 18, 100], -25));
console.log(index3([15, 13, 18, 100], 25));