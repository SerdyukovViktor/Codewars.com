// //Если в массиве есть хотя бы одно совпадение
// function isNice(niceArr) {
//     const niceArr2 = niceArr.map(num => num + 1);
//     const niceArr3 = niceArr.map(num => num - 1);
//     const finArray = niceArr2.concat(niceArr3);
//     for(let i = 0; i <= niceArr.length; i++){
//         return finArray.includes(niceArr[i]);
//     }
// }

// console.log(isNice([2, 10, 9, 3]));
// console.log(isNice([3, 4, 5, 7]));
// console.log(isNice([4, 2, 1]));

// В массиве должны быть все цифры подходящие под n[i] + 1, n[i] - 1
function NiceArray(nice) {
    let counter = 0;
    for(let i = 0; i <= nice.length; i++){
        nice.includes(nice[i] + 1) || nice.includes(nice[i] - 1) ? counter++ : false;
    }
    return (counter == nice.length && nice.length != 0);
}

console.log(NiceArray([2, 10, 9, 3])); // true
console.log(NiceArray([3, 4, 5, 7]));  // false
console.log(NiceArray([4, 2, 1]));     // false