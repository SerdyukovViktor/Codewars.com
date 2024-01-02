function DNAStrand(dna){
    //your code here
    let arr = dna.split('');
    let res = [];
    for(let i = 0; i < dna.length; i++){
        dna[i] === "A" ? res.push("T") : arr.push(arr[i])
        dna[i] === "T" ? res.push("A") : arr.push(arr[i])
        dna[i] === "G" ? res.push("C") : arr.push(arr[i])
        dna[i] === "C" ? res.push("G") : arr.push(arr[i])
    }
    return res.join('')
  }

console.log(DNAStrand("AAAA"))
// ,"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"))
// ,"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"))
// ,"CATA","String GTAT is")