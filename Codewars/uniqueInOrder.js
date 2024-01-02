//ver 1 Main
var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let res = [];
  for(let i = 0; i < iterable.length; i++){
    iterable[i] === iterable[i + 1] ? false : res.push(iterable[i])
  }

  return res;
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
 // , ['A','B','C','D','A','B'])

// //ver 2

// function uniq(text){
//   // let arr = text.split(''),
//     let res = [text[0]];

//     for(let i = 0; i < text.length; i++){
//       if(res[res.length - 1] != text[i]){
//         res.push(text[i])
//       }
//     }
//     return res
// }

// console.log(uniq('AAAABBBCCDAABBB'))