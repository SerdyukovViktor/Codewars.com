// //Отец и сын
//// Через сколько лет отец будет старше сына вдвое

// function twiceAsOld(father, son){
//     let res = son * 2;
//     return Math.abs(father - res);
// }

// console.log(twiceAsOld(55, 30));

//Мать и три дочери. 
//Через сколько сумма возрастов дочерей
//будет равна возрасту матери

const sumOld = (mom, d1, d2, d3) =>{
    let sumDaughtersOld = d1 + d2 + d3;
    let counter = 0;

    for(let i = sumDaughtersOld, j = mom; i <= j; i +=3, j++){
        i === j ? counter : counter++; 
    }
    return counter;
}

console.log(sumOld(55, 15, 7, 21));
