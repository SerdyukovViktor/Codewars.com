//ver 1 main
function abbrevName(name){
    return name.toUpperCase().split(' ').map((val1) => val1[0]).join('.')
}

console.log(abbrevName('vik Se'));