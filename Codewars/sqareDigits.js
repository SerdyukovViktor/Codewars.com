function sqareDigits(num) {
    return Number(num.toString().split('').map(val => val*val).join(''))
}

console.log(typeof(sqareDigits(3212))); //9414