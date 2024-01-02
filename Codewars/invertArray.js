// //ver 1 main
// const invertArray = (arr) => {
//     return arr.map((val) => val >= 0 ? "-"+val : Math.abs(val))
// }

// console.log(invertArray([1, -2, -3, 3, 2, 0]))


// //ver 2 сложнее читать.
// const invArr = values => values.map(el => -el, 0);

// console.log(invArr([1, -2, -3, 3, 2, 0]))


// // ver 3 main
// function inverting(array){
//     let arr2 = [];
//     for(let el = 0; el < array.length; el++){
//         arr2.push(array[el] - (array[el] * 2));
//     }
//     return arr2;
// }

// console.log(inverting([1, -2, -3, 3, 2, 0]));

//ver 4 forEach()

const inv = (arr4) => {
    let res = [];
    arr4.forEach(element => {
        return res.push(element - (element * 2));
    });
    return res;
}

console.log(inv([1, -2, -3, 3, 2, 0]));
