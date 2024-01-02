
function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz',
        arr = string.toLowerCase().replace(/[^a-z]/g, '').split('').sort(),
        letters = Array.from(new Set(arr)).join('');
// return letters
    return letters == alphabet
}


console.log(isPangram("The quick brown 34 fox jumps over the lazy dog."), 'true')
console.log(isPangram("This is not a7 pangram."), 'false')
