// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2){
    if(array1 !== null && array2 !== null){
        let res = array1.map(el => array2.includes(el ** 2)) && array2.map(el => array1.includes(Math.sqrt(el)))
    return res.includes(false) ? false : true;
    }
    return false;
}

// console.log(comp(
    //     [121, 144, 19, 161, 19, 144, 19, 11, 3],
    //     [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))
    
    // console.log(comp(
        //     [121, 144, 19, 161, 19, 144, 19, 11], 
        //     [121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
        
        console.log(comp( [2, 2, 3], [4, 9, 9]), 'Must be FALSE') //false
        
// function comp1(arr1, arr2){

// }

// // console.log(comp1( [2, 2, 3], [4, 9, 9]), 'Must be FALSE') //false

// console.log(comp1(
//     [121, 144, 19, 161, 19, 144, 19, 11, 3],
//     [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))

// console.log(comp1(
//     [121, 144, 19, 161, 19, 144, 19, 11], 
//     [121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
















