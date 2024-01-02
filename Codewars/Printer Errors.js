//ver 1
function printerError(s) {
    let alphHalf = 'abcdefghijklm'
    let count = 0;
    s.split('').map(val => !alphHalf.includes(val) ? count++ : false)
    return `${count}/${s.length}`
}

console.log(printerError("aaabbbbhaijjjm"))   //"0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))   //"8/22"
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))   //"3/56"


// ver 2 regular

const prErr = (s) => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;

console.log(prErr("aaabbbbhaijjjm"))   //"0/14"
console.log(prErr("aaaxbbbbyyhwawiwjjjwwm"))   //"8/22"
console.log(prErr("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))   //"3/56"