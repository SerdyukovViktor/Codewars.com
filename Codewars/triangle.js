//ver 1 main
function triangle (sharpy) {
    let res;
    for(let i = 0; i < sharpy - 1; i++){
        res = '#'.repeat(i + 1)
        console.log(res)
    }
    return res + '#'
}

console. log(triangle(5));

//ver 2

function triAngle(stars) {
    let res = Array.apply(null, {length: stars}).map(Number.call, Number)
    res.map((val => console.log('#'.repeat(val + 1))));
    return ''
}

console.log(triAngle('5'));