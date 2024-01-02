function breakChocolate(n,m) {
    let res = n * m - 1;
    return res >= 0 ? res : 0;
}

console.log(breakChocolate(5, 5) , 24)
console.log(breakChocolate(1, 1) , 0)