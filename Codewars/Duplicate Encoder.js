function duplicateEncode(word){
    let arrWord = word.toLowerCase().split('')
    .map((val, i , values) => values.indexOf(val) == values.lastIndexOf(val) ? '(' : ')')
    .join('')
    return arrWord;
}


console.log(duplicateEncode("din"),"      << (((");
console.log(duplicateEncode("recede"),"   << ()()()");
console.log(duplicateEncode("Success"),"  << )())())","should ignore case");
console.log(duplicateEncode("(( @"),"     << ))((");