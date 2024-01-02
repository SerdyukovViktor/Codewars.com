//ver 1 Main Числа только до 9 включительно
const res = (howLongIsArr, valuesIsSearched) => {
    let arr = [],
    counter = 0;

    for(let i = 1; i <= howLongIsArr; i++){
        arr.push(i);
    }
    
    let str = arr.join('');

    for(let j = 0; j <= str.length; j++){
        // console.log(str[j])
        str[j] == valuesIsSearched ? counter++ : 0;
    }

    // return arr;
    return `Количество значений "${valuesIsSearched}" в 
            последовательности от 1 до ${howLongIsArr} равно: ${(counter)}`;
}

console.log(res(100, 9));