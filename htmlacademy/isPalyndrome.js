let poly = 7997;
let ylop = +(poly.toString().split('').reverse().join(''));
let isPalindrome = false;

poly == ylop ? isPalindrome = true : isPalindrome = false;

console.log(isPalindrome)



/* Техническое задание

Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/
