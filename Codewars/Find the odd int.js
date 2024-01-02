//ver 1 Main
function findOdd(A) {
    let result = {};
    let num = 0;
    A.forEach(element => {
        result[element] = result[element] + 1 || 1;
    });

    for (var key in result){
        result[key] % 2 === 0 ? false : num = key;
    }

    return +num;
}



console.log(findOdd([7],                                '  << 7'));
console.log(findOdd([0],                                '  <<0'));
console.log(findOdd([1,1,2],                            '  <<2'));
console.log(findOdd([0,1,0,1,0],                        '  <<0'));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1],        '  <<4'));


//ver 2

const findOdd1 = (xs, cs) => xs.reduce((a, b) => a ^ b)

console.log(findOdd1([7],                                '  << 7'));
console.log(findOdd1([0],                                '  <<0'));
console.log(findOdd1([1,1,2],                            '  <<2'));
console.log(findOdd1([0,1,0,1,0],                        '  <<0'));
console.log(findOdd1([1,2,2,3,3,3,4,3,3,3,2,2,1],        '  <<4'));
