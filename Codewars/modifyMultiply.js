//ver 1 Main
function modifyMultiply(str, loc, num){
    let arr2 = []
    str.split(' ').map((val, i) => {
        i === loc ? arr2.push(val + '-') : 'Enter index of word';
    });
    let res = arr2.join();
    
    return res.repeat(num).slice(0, -1);
}

console.log(modifyMultiply("This is a string ", 3, 3));