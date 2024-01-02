//ver 1 Main
function getCount(str) {
    let counter = 0;
    let arr = str.split('')
    for(let i = 0; i < str.length; i++){
        // console.log(arr[i])
        arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u' ? counter++ : "failure"
    }
    return counter;
}
console.log(getCount("abracadabra"))
console.log(getCount("aaaeeioooouu"))

//ver 2 Regular

function getCount2(words) {
    return (words.match(/[aeiou]/ig)).length
}

console.log(getCount2("abracadabra"))
console.log(getCount2("aaaeeioooouu"))

//ver 3 Array.filter()

var getCnt = (someWords) => {
    return someWords.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;
}

console.log(getCnt("abracadabra"))
console.log(getCnt("aaaeeioooouu"))