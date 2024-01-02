//ver 1 Main
function squareSum(numbers){
    return numbers.map(val => val * val, 0).reduce((acc, cur) => acc+ cur, 0)
}

    console.log(squareSum([1,2]), 5);
    console.log(squareSum([0, 3, 4, 5]), 50);
    console.log(squareSum([]), 0)

//ver 2
const sqSum = num => num.reduce((a,b) => a + b**2, 0)

console.log(sqSum([1,2]), 5);
console.log(sqSum([0, 3, 4, 5]), 50);
console.log(sqSum([]), 0)
