// BEGIN (write your solution here)
function isLeapYear(year){
    return year % 400 === 0 || (year % 4 === 0 && (year % 100 !== 0));
}
// END

/*Задание
Реализуйте функцию isLeapYear(), которая определяет, 
является ли год високосным или нет. Год будет високосным, 
если он кратен (то есть делится без остатка) 400 или он 
одновременно кратен 4 и не кратен 100. Как видите, 
в определении уже заложена вся необходимая логика, 
осталось только переложить её на код: */

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2018)); // false
console.log(isLeapYear(2017)); // false