const maxValue = (a, b, c) => {
    val0    = a + b + c;
    val1    = a * b * c;
    val2    = (a + b) * c;
    val3    = a * (b + c);
    return Math.max(val0, val1, val2, val3);
    
}

console.log(maxValue(5, 1, 3)); //20
console.log(maxValue(3, 5, 7)); //105
console.log(maxValue(5, 6, 1)); //35
console.log(maxValue(1, 6, 1)); //8
console.log(maxValue(2, 6, 1)); //14
console.log(maxValue(6, 7, 1)); //48