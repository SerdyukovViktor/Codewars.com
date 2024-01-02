function highAndLow(numbers){
    let nums = numbers.split(' ')
    return `${(Math.max.apply(null, nums))} ${Math.min.apply(null, nums)}`
  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
// , "42 -9");