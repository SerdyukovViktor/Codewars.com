// ver 1 main
var isSquare = function(n){
    let res = Math.sqrt(n);
    if(res % 1 == 0){
        return (console.log("true"))
    }else{return console.log("false")};
    // return res; // fix me
  }

  console.log(isSquare(25))
  console.log(isSquare(0))
  console.log(isSquare(3))
  console.log(isSquare(26))
  console.log(isSquare(4))
  console.log(isSquare(5))
  console.log(isSquare(-1))

//ver 2

var isSquare2 = (n) => Math.sqrt(n) % 1 === 0;

console.log(isSquare2(25))
console.log(isSquare2(0))
console.log(isSquare2(3))
console.log(isSquare2(26))
console.log(isSquare2(4))
console.log(isSquare2(5))
console.log(isSquare2(-1))
