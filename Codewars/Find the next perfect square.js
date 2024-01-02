// //ver 1 Main
// function findNextSquare(sq) {
//     let res = Math.sqrt(sq);
//     if(res % 1 !== 0) return -1
    
//     let val = sq + 1;
//     for(let i = val; i <= (sq ** 2); i++){
//         if(Math.sqrt(i) % 1 === 0){
//             val = i;
//             break;
//         }
//         val += 1;
//     }
//     return val;
// }


// console.log(findNextSquare(121), 144, "Wrong output for 121");
// console.log(findNextSquare(625), 676, "Wrong output for 625");
// console.log(findNextSquare(319225), 320356, "Wrong output for 319225");
// console.log(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
// console.log(findNextSquare(155), -1, "Wrong output for 155");
// console.log(findNextSquare(342786627), -1, "Wrong output for 342786627");

//ver 2 

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq)+1) ** 2;
  }

console.log(findNextSquare(121), 144, "Wrong output for 121");
console.log(findNextSquare(625), 676, "Wrong output for 625");
console.log(findNextSquare(319225), 320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
console.log(findNextSquare(155), -1, "Wrong output for 155");
console.log(findNextSquare(342786627), -1, "Wrong output for 342786627");
