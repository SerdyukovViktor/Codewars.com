function digPow(n, p){
    let arrPow = [];
    let nLen = n.toString().split('');
    let res = 0;
    for(let i = p; i < nLen.length + p; i++){
        arrPow.push(i);
    }

    for(let k = 0; k < nLen.length; k++){
        res += Math.pow(nLen[k], arrPow[k])
    }
    if(res % n) return -1
    return res / n
    
}

// console.log(digPow(89, 1))
// , 1)
// console.log(digPow(92, 1))
// // // , -1)
console.log(digPow(46288, 3))
// // , 51)