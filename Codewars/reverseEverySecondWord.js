function reverseSecWord(str) {
    let arr = str.split(' ');
    for (let i = 0; i <= arr.length; i++){
        i % 2 ? arr[i] = arr[i].split('').reverse().join('') : arr[i];
        }
        return arr.join(' ').trim();
    }

console.log(reverseSecWord("Reverse this string, please!"));
console.log(reverseSecWord("I really don't like reversing strings!"));