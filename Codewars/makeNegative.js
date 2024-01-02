function makeNegative(num) {
    // Code?
    let res = num < 0 ? num - (num * 2) : num;
    return -res;
  }

  console.log(makeNegative(-9))
  console.log(makeNegative(42))