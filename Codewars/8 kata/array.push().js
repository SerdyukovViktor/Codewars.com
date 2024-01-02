function newArray(start, end) {
    let arr = [];
    for(let i = start; i <= end; i += start) {
        arr.push(i);
    }
    return arr;
}
console.log(newArray(3, 243));