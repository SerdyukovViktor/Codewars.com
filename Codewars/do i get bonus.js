function bonusTime(salary, bonus) {
    return bonus === false ? "$" + salary : "$" + (salary * 10);
}

console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(60000, false))