// BEGIN (write your solution here)
function convertText(str){
    if(str === '') return '';
    return str[0] === str[0].toUpperCase() ? str : (convertText(str.substr(1)) + str.charAt(0));
}
// END

console.log(convertText('Hi!'));
console.log(convertText('hi!'));
