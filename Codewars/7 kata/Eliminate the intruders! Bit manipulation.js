// https://www.codewars.com/kata/5a0d38c9697598b67a000041/train/javascript

function eliminateUnsetBits(number) {
    let res = number.replace(/[0] /gi, '34');
    return res;
}

console.log(eliminateUnsetBits("11010101010101"), ":  255");
console.log(eliminateUnsetBits("111"), ": 7");
console.log(eliminateUnsetBits("1000000"), ": 1");
console.log(eliminateUnsetBits("000"), ": 0");