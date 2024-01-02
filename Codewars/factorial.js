//1. Переменная.цикл
let fact = 1;
    for(let i = 1; i <= 9; i++) {
        fact *= i;
    }
    console.log(fact + " Первый способ");

//2. Функция.цикл

function factorial(num){
    let fact2 = 1;
    for(let i = 1; i <= num; i++){
        fact2 *= i;
    }
    return fact2;
}

console.log(factorial(9) + " Второй способ");

//3. Функция/ рекурсия

function recFact(val){
    return (val - 1) ? val * recFact(val - 1) : 1;
}

console.log(recFact(9) + " Третий способ");