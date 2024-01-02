// function createPhoneNumber(numbers){
//   let res = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}`+ `-${numbers.slice(6, 10)}`
//     return res.replace(/[,]/g, '')

// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// // , "(123) 456-7890");
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// // , "(111) 111-1111");
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// // , "(123) 456-7890");



// //ver 2

// function createPN(numbers){
//     return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9]
//   }

// console.log(createPN([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// // , "(123) 456-7890");
// console.log(createPN([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// // , "(111) 111-1111");
// console.log(createPN([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// // , "(123) 456-7890");

//ver 3

function crPN(numbers){
    let numFormat = "(xxx) xxx-xxxx";
    for(let i = 0; i < numbers.length; i++){
        numFormat = numFormat.replace('x', numbers[i])
    }
    return numFormat;
}

console.log(crPN([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// , "(123) 456-7890");
console.log(crPN([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// , "(111) 111-1111");
console.log(crPN([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// , "(123) 456-7890");
