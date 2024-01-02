// ver 1 Main
function getSum( a,b )
{
  if(a === b) return a;

  let arr = [];
  let res = 0;

  if(a < b){
    for(let i = a; i <= b; i++){
      arr.push(i);
    }
  }else if(a > b) {
    for(let k = b; k <= a; k++){
      arr.push(k)
    }
  }
  return arr.reduce((a,b) => b + a, 0)
}


console.log(getSum(15, -2))

// //ver 2 sort()
// function getS(a,b) {
//     let sum = 0;
//     let minMax = [a,b].sort((a,b) => a - b)
//     for(let i = minMax[0]; i <= minMax[1]; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(getS(15, -2))