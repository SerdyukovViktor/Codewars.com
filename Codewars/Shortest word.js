function findShort(s){
  let res = s.split(' ').map(str => str.length)
  return Math.min.apply(null, res)
}




console.log(findShort("bitcoin take over the world maybe who knows perhaps"), "<< должно быть - 3");
// console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// console.log(findShort("Let's travel abroad shall we"), 2);