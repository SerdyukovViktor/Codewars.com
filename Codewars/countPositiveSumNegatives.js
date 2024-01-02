//ver 1 main
function countPositiveSumNegative(input) {
    let res = [];
    let count = 0;
    let sum = 0;
    if(!input || input == 0){
        return []
    }
    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            count++
        } else if(input[i] < 0){
            sum += input[i];
        } else if(input.includes(0)){
            return []
        }
    }

    res.push(count, sum)
    return res;
}
console.log(countPositiveSumNegative([0,0]))
console.log(countPositiveSumNegative([null]))
console.log(countPositiveSumNegative(undefined))
console.log(countPositiveSumNegative(null))
console.log(countPositiveSumNegative([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
console.log(countPositiveSumNegative([2, -3, 0, null, -5]))
console.log(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// //ver 2

// function countAndSum(input2) {
//     return input2.map((val) => val >= 0 ? input2.push() : 0)
// }

// console.log(countAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));