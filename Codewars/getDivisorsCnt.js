function getDivisorsCnt(n) {
    let res = 0;
    for(let i = 0; i <= n; i++){
        n % i == 0 ? res++ : res;
    }
    return res;
}

console.log(getDivisorsCnt(50000))
