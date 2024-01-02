function nbYear(p0, percent, aug, p) {
    percent = percent / 100;
    let val = p0 + p0 * percent + aug

    for(let i = 0;)


    return val;
}

console.log(nbYear(1000, 2, 50, 1200), 3)
console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);

//Not work!!