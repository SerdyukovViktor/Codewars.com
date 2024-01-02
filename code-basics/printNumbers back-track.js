// @ts-check
/* eslint operator-assignment: 0 */

const printNumbers = (initialNumber) => {
    // BEGIN (write your solution here)
    while (initialNumber > 0){
        console.log(initialNumber);
        initialNumber--;
    } 
    console.log('finished!');
    // END
  };
  
console.log(printNumbers(5));
  