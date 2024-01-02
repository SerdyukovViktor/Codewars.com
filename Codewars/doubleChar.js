//ver 1 main
const doubleChar = (str) => {
    return str.split('').map((val) => val + val, 0).join('');
}

console.log(doubleChar('123abc'));

//ver 2 main

function duplicate(values){
    let arr = [];
    for(let i = 0; i < values.length; i++){
        let y = values[i];
        arr.push(y + y);
    }
    return arr.join('');
}

console.log(duplicate('123abc')); // 112233aabbccNaN