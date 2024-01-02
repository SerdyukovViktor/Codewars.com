// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
    if(words == '') return "";
    return words.split(' ').sort(function(a,b) {
        //использовал регулярное выражение "\d", можно так же написать "/[0-9]/" для более лёгкого чтения
        return a.match(/\d/) - b.match(/\d/)
    }).join(' ')
}

console.log(order("is2 Thi1s T4est 3a"), "\n// Thi1s is2 3a T4est\n")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "\nFo1r the2 g3ood 4of th5e pe6ople")
console.log(order(" "), "empty input should return empty string" )