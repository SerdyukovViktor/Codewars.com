function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
        return dna.replace(/T/g, "U")
  }

  console.log(DNAtoRNA("TTTT"), "UUUU")
  console.log(DNAtoRNA("GCAT"), "GCAU")
  console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")