//ver 1 from the Book of David Flanagan: JavaScript The Definitive Guide
function fibo(num) {
    let fibonacci = 0;
    for (let i = 0, j = 1, k = 0, fib = 0; i <= num; i++, fib = j + k, j = k, k = fib){
        fibonacci = "ver 1 : Fibonacci (" + i + ") = " + fib;
        // console.log(fibonacci)
    }
    return fibonacci;
}

console.log(fibo(15));

//ver 2 Рекурсия. При больших числах печально из-за огромного объёма вычислений,
//но код лаконичный.
const fib = (val) => {
    return val <= 1 ? val : fib(val -1) + fib(val -2) ;
}

console.log(`ver 2 : Fibonacci (15) = ${(fib(15))}`);

//ver 3 Цикл, не требует повторных вычислений как при рекурсии.
//i = 3, потому что первые два числа последовательности заданы в "a" и "b"

function fibon(n) {
    let a = 1,
        b = 1;
        for(let i = 3; i <= n; i++){
            let c = a + b;
            a = b;
            b = c;
        }
        return `ver 3 : Fibonacci (${n}) = ${b}`;
}

console.log(fibon(15));