function duplicateCount(text){
    //...
    arr = text.toLowerCase()
        .split('')
        .filter((val, i, values) => values.indexOf(val) !== i)
    return arr.filter((elem, index) => index === arr.indexOf(elem)).length
  }

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aaabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")