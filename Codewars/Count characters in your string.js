// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (string) {  
    let obj = {}
    string.split('').map((val, i, arr) => {
        let count = 0;
        for(let k = 0; k <= arr.length; k++){
            if(arr[k] == val) count++
        }
        obj[val] = count;
    })
    return obj;
  }

console.log(count("ababaaabxx"), { a: 5, b: 3, x: 2 }); 
console.log(count(""), {});