function sumTwoSmallestNumbers(numbers){
    numbers.sort((a, b) => a - b).length;
    numbers.length = 2;
    return numbers.reduce((c,d) => c + d);

}


console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), "Sum should be 16");