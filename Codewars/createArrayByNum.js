// ver 1 main
let arr = N => {
    const mass = [];
    for (let i = 0; i < N; i++){
        mass.push(i);
    }
    return mass;
}
console.log(arr(20)); 


// ver 2 

const digs = n => Array.apply(null, {length: n}).map(Number.call, Number )

console.log(digs(20));

//ver 3

function arrFromNum(AnyNum) {
    return new Array(AnyNum).fill().map((val, i) => i)
}

console.log(arrFromNum(20));
