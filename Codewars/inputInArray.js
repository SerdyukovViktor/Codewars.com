//ver 1
function digitize (n) {
    return n.toString().split('').reverse().map(val => Number(val));
}
console.log(digitize(123));
