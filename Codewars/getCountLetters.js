// // ver 1 Main
// function getCount(str) {
//     counter = '';
//         str.split('').map(val => val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u' ? counter++ : counter)
//     return counter;
// }

// console.log(getCount('abracadabraou')) //5

// ver 2 Регулярно выражение. (пока что сложно для восприятия)

const getCnt = (str1) => (str1.match(/[aeiou]/gi) || []).length;

console.log(getCnt('abracadabraou')) //5
