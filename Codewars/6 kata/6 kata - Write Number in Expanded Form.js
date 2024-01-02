//ver 1 NOt Main
function expandedForm(num) {
    return num.toString()
              .split('')
              .reverse()
              .map((val, i) => val * Math.pow(10, i))
              .filter(a => a > 0)
              .reverse()
              .join(' + ')
}

// console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');

