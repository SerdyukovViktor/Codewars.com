function twoSum(numbers, target) {
    let res = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let k = i + 1; k < numbers.length; k++){
            numbers[i] + numbers[k] === target ? res.push(i, k) : false;
        }
    }
    return res;
}

    console.log(twoSum([1,2,3], 4))
    // ,          4,        [0,2]]),
    console.log(twoSum([1234,5678,9012], 14690))
    // ,          14690, [1,2]]),
    console.log(twoSum([2,2,3] , 4))
    // ,          4,     [0,1]]),
    console.log(twoSum([2,3,1], 4))
    // ,          4,     [1,2]])
