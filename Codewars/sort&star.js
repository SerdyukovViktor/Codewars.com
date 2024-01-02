//ver 1
function twoSort(s) {
    let res = s.sort()
    return res[0].split('').join('***')
  }

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// , 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))
// , 'a***r***e'); 


//ver 2
function tS(s) {
    return s.sort()[0].split('').join('***')
  }

console.log(tS(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// , 'b***i***t***c***o***i***n' );
console.log(tS(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))
// , 'a***r***e'); 


