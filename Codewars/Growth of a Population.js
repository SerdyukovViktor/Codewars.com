function nbYear(p0, percent, aug, p) {
    let count = 0;
    let res = p0;
    while(res < p){
        res += Math.floor(res / 100 * percent) + aug;
        count++;
    }
    return count;
}

console.log(nbYear(1000, 2, 50, 1200), 3)
console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);

console.log(nbYear(1000, 2, 50, 1214), 4); // 4
console.log(nbYear(1500000, 0, 10000, 2000000), 50); // 50