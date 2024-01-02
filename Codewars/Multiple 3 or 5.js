function solution(number){
    let arr = [];
    for(let i = 0; i < number; i++){
        i % 3 && i % 5 ? false : arr.push(i)
    }
    return arr.reduce((a, b) => a + b, 0);
}


console.log(solution(10));