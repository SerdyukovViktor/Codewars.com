function friend(friends){
    let arr = [];
    for(val of friends){
        val.length === 4 ? arr.push(val) : false
    }
    return arr;
}

console.log(friend(["Ryan", "Kieran", "Mark"])) //["Ryan", "Mark"])
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])) //["Ryan"])
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])) //["Jimm", "Cari", "aret"])
console.log(friend(["Love", "Your", "Face", "1"])) //["Love", "Your", "Face"])