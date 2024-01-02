//С помощью repeat();
const contamination = (text, char) => {
    return char.toLowerCase().repeat(text.length);
}

console.log(contamination("aBc", "Z"));

//С помощью replace();

function contamination2(str, rep) {
    return str.toUpperCase().replace(/./g, rep);
}

console.log(contamination2("skieempodsa", 'q'));