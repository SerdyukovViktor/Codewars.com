//ver 1 Methods
function reverseMethod (str) {
    return str.split('').reverse().join('');
}

console.log(reverseMethod('world'));

//ver 2 Cycle
function reverseCycle (str) {
    let itog = [];
    for(let i = str.length - 1; i >= 0; i--) {
        itog += str[i];
    }
    return itog;
}

console.log(reverseCycle('word'));