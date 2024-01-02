// // BEGIN (write your solution here)
// function whoIsThisHouseToStarks(arg){
//     let friends = {
//         friendlyFamily:'Karstark', 
//         friendlyFamily2: 'Tally',
//     }
//     let enemies = {
//         enemyFamily: 'Lannister',
//         enemyFamily2: 'Frey',
//     }
//     for(let person of Object.values(friends)){
//         if(arg === person) return 'friend';
//     }
//     for (const person of Object.values(enemies)) {
//         if(arg === person) return 'enemy';
//     };
//     return 'neutral'
// }
// // END

// console.log(whoIsThisHouseToStarks("Karstark"));
// console.log(whoIsThisHouseToStarks("Frey"));
// console.log(whoIsThisHouseToStarks("Buddy"));



//ver 2
function whoIsThisHouseToStarks(men){
    if (men === 'Karstark' || men === 'Tally') {
        return 'friend';
    } else if(men === 'Lannister' || men === 'Frey'){
        return 'enemy'
    } else{
        return 'neutral';
    }
}
console.log(whoIsThisHouseToStarks("Karstark"));
console.log(whoIsThisHouseToStarks("Frey"));
console.log(whoIsThisHouseToStarks("Buddy"));
console.log(whoIsThisHouseToStarks(undefined));
