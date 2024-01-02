function joinNumbersFromRange(start, finish){
    let res = start;
    for (let i = start; i < finish; i++) {
        res += `${i + 1}`;
    }
return String(res);
};

console.log(joinNumbersFromRange(5, 10));
console.log(joinNumbersFromRange(1, 1));
console.log(joinNumbersFromRange(2, 3));