// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};


console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
