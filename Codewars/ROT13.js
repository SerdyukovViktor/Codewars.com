//ver 1
function rot13(message){
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return message.replace(/[A-Z]/gi, c =>
    "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] )
}

console.log(rot13('test'), ' << grfg');


//ver 2

function ROT13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }

console.log(ROT13('test'), ' << grfg');
