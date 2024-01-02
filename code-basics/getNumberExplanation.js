// BEGIN (write your solution here)
function getNumberExplanation(arg) {
    switch (arg) {
        case 666 :
            return 'devil number'
        case 42 :
            return 'answer for everything'
        case 7 :
            return 'prime number'
        default:
            return 'just a number'
    }
}
// END


console.log(getNumberExplanation(666));
console.log(getNumberExplanation(42));
console.log(getNumberExplanation(7));
console.log(getNumberExplanation(584654));


// 666 - devil number
// 42 - answer for everything
// 7 - prime number
// other nums - just a number