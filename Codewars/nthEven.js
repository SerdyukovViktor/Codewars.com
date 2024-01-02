//ver 1 main. Много ресурсов забирает
function nthEven(n) {
    let array = [];
        for(let i = 0; i < n; i++){
            array.push(i)
        }

        return array.map((val, i) => val + i)[array.length - 1];
}

console.log(nthEven(3)); //4
console.log(nthEven(2)); //2
console.log(nthEven(5)); //8
console.log(nthEven(1)); //0

//ver 2

const nthEven2 = m => m * 2 - 2;

console.log(nthEven2(3)); //4
console.log(nthEven2(2)); //2
console.log(nthEven2(5)); //8
console.log(nthEven2(1)); //0
