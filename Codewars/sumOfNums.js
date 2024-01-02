function sum(...args) {
    return args.reduce((sum, cur) => sum + cur)
}

console.log(sum(1,2,3,4)) //10