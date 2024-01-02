/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
function multiplyNumbersFromRange(first, second){
    let res = 1;

    for(let i = first; i <= second; i++){
        res *= i;
    }
    return res;
}
// END

console.log(multiplyNumbersFromRange(1, 5));
console.log(multiplyNumbersFromRange(2, 3));
console.log(multiplyNumbersFromRange(6, 6));
