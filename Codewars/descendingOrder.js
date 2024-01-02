// // ver 1 Main
// function descendingOrder(n){
//     let arr =[];
    
//     n = String(n)
    
//     for(let i = 0; i <= n.length; i++){
//         arr.push(n[i]);
//     }

//     let res = arr.sort((a, b) => b - a).join('');
//     return +res;
// }

// console.log(descendingOrder(0), "0")
// console.log(descendingOrder(1), "1")
// console.log(descendingOrder(111), "111")
// console.log(descendingOrder(15), "51")
// console.log(descendingOrder(1021), "2110")
// console.log(descendingOrder(123456789), "987654321")

//ver 2

function descendingOrd(num){
    return parseInt(String(num).split('').sort().reverse().join(''))
}

console.log(descendingOrd(0), "0")
console.log(descendingOrd(1), "1")
console.log(descendingOrd(111), "111")
console.log(descendingOrd(15), "51")
console.log(descendingOrd(1021), "2110")
console.log(descendingOrd(123456789), "987654321")