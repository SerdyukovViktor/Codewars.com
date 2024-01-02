// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function(size) {
    let arr = [];
    for(let i = 1; i <= size; i++){
        let row = [];
        for(let k = 1; k <= size; k++){
            row.push(i * k);
        }
        arr.push(row);
    }
    return arr;
  }
console.log(multiplicationTable(3));