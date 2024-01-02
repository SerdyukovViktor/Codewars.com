function solution(str, ending){
    // TODO: complete
    let str1 = str.split('').reverse();
    let ending1 = ending.split('').reverse();
    str1.length = ending1.length;
    console.log(ending1, str1)
    let res = str1.toString() === ending1.toString();
    return res;

}


  console.log(solution('abc', "bc"));
  console.log(solution('abc', "ab"));
  console.log(solution('abc', "d"));
  console.log(solution('a', "a"));