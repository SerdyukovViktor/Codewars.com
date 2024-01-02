//ver 1
const positiveSum = (arr) => {
    let arr2 = [];
    for(let i = 0; i <= arr.length; i++){
        arr[i] >= 0 ? arr2.push(arr[i]) : 0;
    }
    return arr2.reduce((a,b) => a + b, 0);
}

console.log(positiveSum([1, -4, 7, 12])); //20

//ver 2

const positiveSumV2 = (arr3) => arr3.reduce((a, b) => a + (b >= 0 ? b : 0), 0);

console.log(positiveSumV2([1, -4, 7, 12])); //20

//ver 3

function positiveSumV3(arr4) {
    let sum = 0;
    for(let j = 0; j <= arr4.length; j++){
        arr4[j] >= 0 ? sum += arr4[j] : 0;
    }
    return sum;
}

console.log(positiveSumV3([1, -4, 7, 12])); //20
