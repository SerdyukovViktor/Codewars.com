// ПРОИЗВЕСТИ МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ НАД ТОЧКАМИ

function dotCalculator(equation) {
    let [num1, operator, num2] = equation.split(' '),
        dig1 = num1.length,
        dig2 = num2.length;

        switch(operator){
            case '*' :
                return '.'.repeat(dig1 * dig2);
            case '/' :
                return '.'.repeat(Math.floor(dig1 / dig2));
            case '+' :
                return '.'.repeat(dig1 + dig2);
            case '-' :
                return '.'.repeat(dig1 - dig2);
            default: return "input fucking dot's"

        }


}

console.log(dotCalculator("...... * .."));
