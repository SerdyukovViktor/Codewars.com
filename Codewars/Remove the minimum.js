function removeSmallest(numbers) {
    if(numbers == !numbers) return []
    let minIndex = numbers[0];
    let copy = [...numbers]
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] < minIndex){
            minIndex = numbers[i] 
        }
    }
    mid = numbers.indexOf(minIndex);
    if(copy !== -1){
        copy.splice(mid, 1)
        return copy
    }
  }

console.log(removeSmallest([2, 2, 3, 4, 1, 5]))
//, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]))
// , [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]))
// , [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([]))
// , [], "Wrong result for []");