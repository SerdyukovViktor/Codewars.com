//ver 1 ARRAY
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function position(letter) {
    return alphabet.indexOf(letter) + 1;
}
console.log(position('z'));

//ver 2 STRING

const alphabetV2 = (l) => {
    const i = 'abcdefghijklmnopqrstuvwxyz'.indexOf(l) + 1;
    return `Position of alphabet: ${i}`
}

console.log(alphabetV2('z'));
