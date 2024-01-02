// ver 1
function isIsogram(str){
    let res = str.toLowerCase()
    .split('')
    .filter((val, i, values) => values.indexOf(val) !== i)
    .join('')
    return res
  }

console.log( isIsogram("Dermatoglyphics"))
// , true );
console.log( isIsogram("isogram"))
// , true );
console.log( isIsogram("aba"))
// , false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"))
// , false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"))
// , false );
console.log( isIsogram(""))
// , true, "an empty string is a valid isogram" );

// //ver 2

// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }

// console.log( isIsogram("Dermatoglyphics"), true );
// console.log( isIsogram("isogram"), true );
// console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
// console.log( isIsogram("moOse"), false, "same chars may not be same case" );
// console.log( isIsogram("isIsogram"), false );
// console.log( isIsogram(""), true, "an empty string is a valid isogram" );