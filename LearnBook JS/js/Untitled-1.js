// BEGIN (write your solution here)
function guessNumber(guess){
    if(guess === 42) return 'You win!'
    return 'Try again!'
}
// END

console.log(guessNumber(42)); // You win!
console.log(guessNumber(61)); // Try again!