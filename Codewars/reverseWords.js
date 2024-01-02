//ver 1
const reverse = str =>  str.split(' ').reverse().join(' ');

console.log(reverse('Viktor go'));

//ver 2
const reverse2 = str2 => {
    return str2.split(' ').reverse().join(' ');
}
console.log(reverse2('Viktor go'));

//ver 3

function reverse3(str3) {
    return str3.split(' ').reverse().join(' ');
}


console.log(reverse3('Viktor go'));

//ver 4 Reverse every word
function reverseWords(str) {
    return str.split(' ').map(val => val.split('').reverse().join('')).join(' ')
  }

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');