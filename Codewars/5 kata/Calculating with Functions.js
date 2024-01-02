//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/solutions/javascript

function zero(res) { return res ? res(0) : 0}
function one(res) { return res ? res(1) : 1}
function two(res) { return res ? res(2) : 2}
function three(res) { return res ? res(3) : 3}
function four(res) { return res ? res(4) : 4}
function five(res) { return res ? res(5) : 5}
function six(res) { return res ? res(6) : 6}
function seven(res) { return res ? res(7) : 7}
function eight(res) { return res ? res(8) : 8}
function nine(res) { return res ? res(9) : 9}

function plus(num) {return function(val) {return val + num}}
function minus(num) {return function(val) {return val - num}}
function times(num) {return function(val) {return val * num}}
function dividedBy(num) {return function(val) {return val / num}}


console.log(seven(times    (five ())), 35);
console.log(four (plus     (nine ()))) //13);
console.log(eight(minus    (three())),  5);
console.log(six  (dividedBy(two  ())),  3);