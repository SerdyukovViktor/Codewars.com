// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {
    if(!!!minorWords) return 0;
    // "!!" — является проверкой как определена ли переменная и является истиной 
    // "!!!" — как определена переменная и является ложью.
    // При этом если переменная является Undefined, то всегда вернется false.
   
    let matching = title.toLowerCase()
                    .split(' ').filter(word => minorWords.toLowerCase().includes(word))
                    .join()

    // let str = title.toLowerCase().split(' ')
    //                 .map(val => val[0].toUpperCase() + val.substring(1))
    //                 .join(' ');

    //let res = title[0].toUpperCase() + str.substr(1);
    return matching;
}

console.log(titleCase('a clash of KINGS', 'a an the of'), ' : A Clash of Kings')
// should return: 'A Clash of Kings'

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), ' : The Wind in the Willows')
// should return: 'The Wind in the Willows'

console.log(titleCase('the quick brown fox'), ' : The Quick Brown Fox')
// should return: 'The Quick Brown Fox'