// //ver 1 main
// function nonConsecutive(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i + 1] != arr[i] + 1) {
//             return arr[i + 1];
//         }
//     }
//     return null
// }

// console.log(nonConsecutive([1,2,3,4]));
// console.log(nonConsecutive([-9,-8,-7,-5, -4]));
// console.log(nonConsecutive([-1,-2,-3,-4,-6,-7]));
// console.log(nonConsecutive([7,8,10,11,12,13,14,15,16]));
// console.log(nonConsecutive([]));

//ver 2 

const nonCons = (arr2) => {
    let nonCon = arr2.find((num, index) => num !== index + arr2[0]);
    return Number.isInteger(nonCon) ? nonCon : null;
}
console.log(nonCons([1,2,4,5]));