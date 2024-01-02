// BEGIN (write your solution here)
const name = 'Hexlet';
const getLetter = (text, num) =>{
    return text[num - 1] || ''; //Возвращает символ строки или пустую строку если аргумент num больше или меньше длин строки
}
// END

console.log(getLetter(name, 1)); // 'H'
console.log(getLetter(name, 0)); // ''
console.log(getLetter(name, 6)); // 't'));