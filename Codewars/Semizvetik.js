
function howMuchILoveYou(nbPetals) {
    let res = (nbPetals + 5) % 6
    return [
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all"
    ][res]
}


  console.log(howMuchILoveYou(8)) // 6