function stringCounter(str, letter) {
    let counter = 0;
    for(let val of str){
        val === letter ? counter++ : false;
    }
    return counter;
}

console.log(stringCounter("Hello", "l"));