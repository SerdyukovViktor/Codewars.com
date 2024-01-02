// //ver 1
// var number = function(busStops){
//     return busStops.map(val => val[0] - val[1]).reduce((acc, cur) => acc + cur,0)
// }

// console.log(number([[10,0],[3,5],[5,8]]),5);
// console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
// console.log(number([[0,0]]),0);

//ver 2

var num = (bS) => bS.reduce((acc, [on, out]) => acc + on - out, 0)

console.log(num([[10,0],[3,5],[5,8]]),5);
console.log(num([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(num([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(num([[0,0]]),0);