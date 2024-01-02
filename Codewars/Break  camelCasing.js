// //ver 1 Main
// function solution(string) {
//     return string.split('').map(s => /[A-Z]/.test(s) ? ` ${s}` : s).join('')
// }


// console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

//ver 2 

function solution(string) {
    return string.replace(/([A-Z])/g, ` $1`)
}

console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
