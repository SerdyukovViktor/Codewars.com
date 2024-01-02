// //ver 1
// const rps = (p1, p2) => {
//     if(p1 === "scissor" && p2 === "papper" || p1 === "papper" && p2 === "rock" || p1 === "rock" && p2 === "scissor"){
//         return "Player 1 won!";
//     } else if(p1 === p2) {
//         return "draw!";
//     } else {
//         return "Player 2 won!";
//     }
// }

// console.log(rps("rock", "papper"));

//ver 2

function knb (Player1, Player2) {
    let comb = Player1 + Player2;
    switch(comb){
        case 'scissorpapper' : return "Player 1 won!";
        case 'papperrock' : return "Player 1 won!";
        case 'rockscissor' : return "Player 1 won!";

        case 'scissorrock' : return "Player 2 won!";
        case 'rockpapper' : return "Player 2 won!";
        case 'papperscissor' : return "Player 2 won!";

        default: return "draw!";
            
    }

}

console.log(knb("papper", "rock"));