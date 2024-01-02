// // // ver 2
function qT(customers, n) {
  let kassArr = new Array(n).fill(0);   // [0,0,0]
  for(let customer of customers){
    let index = kassArr.indexOf(Math.min(...kassArr));
    kassArr[index] += customer;
  }

  return Math.max(...kassArr);
}

  console.log(qT([], 1)              , 0);
  console.log(qT([1,2,3,4], 1)       , 10);
  console.log(qT([2,2,3,3,4,4], 2)   , 9);
  console.log(qT([1,2,3,4,5], 100)   , 5);

  console.log(qT([5,3,4], 1)         , 12);
  console.log(qT([10,2,3,3], 2)      , 10);
  console.log(qT([2,3,10,2], 2)      , 12);

  console.log(
    qT(
      [26,17,26,14,49,23,27,19,25,14,8,49,43,23,45,42,12,46,2,24,12,6,34,39,36,30], 3
      ) ,' - Ответ должен быть: 244'
    )