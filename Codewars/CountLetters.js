// https://ru.stackoverflow.com/questions/1160657/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C-%D0%BA%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D0%B2-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B5-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0

let arr = ["u\Z%Cm@kc|", "6kmpNvMqQK", "THbw%}\_2L", "}QVMQbik@'", "g}7P5+:?>f"]

var letters = arr => arr.map(el => "letters : " + el.toLowerCase()
                                                    .replace(/[^a-z]/gi, '')
                                                    .length)
console.log(letters(arr))