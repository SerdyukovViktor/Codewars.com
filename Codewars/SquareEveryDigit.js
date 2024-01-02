// ver 1 Main
function squareDigits(num){
  let res = num.toString().split('').map(val => val *= val).join('');
  return +res
  }

console.log(squareDigits(3212))
// , 9414);
console.log(squareDigits(2112))
// , 4114);
console.log(squareDigits(0))
// , 0);

// ver 2