const getHiddenCard = (cardNum, stars) => {
    if(stars) return '*'.repeat(stars) + cardNum.slice(-4);
    return '*'.repeat(4) + cardNum.slice(-4);
}


console.log(getHiddenCard('1234567812345678', 2)); //**5678
console.log(getHiddenCard('1234567812345678', 3)); //***5678
console.log(getHiddenCard('1234567812345678', 2)); // **5678
console.log(getHiddenCard('1234567812345678', 3)); // ***5678
console.log(getHiddenCard('1234567812345678'));    // ****5678
console.log(getHiddenCard('2034399002121100', 1)); // *1100