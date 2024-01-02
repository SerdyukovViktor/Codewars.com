// We wrote the reverse() function solely for our exercises
// It uses some techniques that we haven't covered in our lessons yet
const reverse = (s) => s.split('').reverse().join('');

// BEGIN (write your solution here)
function isPalindrome(str) {
    // str.toLowerCase();
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

function isNotPalindrome(s) {
    let res = s.toLowerCase().split('').reverse().join('') !== s.toLowerCase();
    return res;
}
// END

console.log(isPalindrome('шалаш')); // true
console.log(isPalindrome('агА')); // true
console.log(isPalindrome('хекслет')); // false));

console.log(isNotPalindrome('hexlet')); // true
console.log(isNotPalindrome('asdffdsa')); // true
console.log(isNotPalindrome('Wow')); // false));