String.prototype.toAlternatingCase = function () {
    return this.split('').map(val => val === val.toUpperCase() ? val.toLowerCase() : val.toLocaleUpperCase()).join('')
}

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");