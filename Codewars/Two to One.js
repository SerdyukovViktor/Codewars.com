function longest(s1, s2) {
    let res = s1 + s2;
    return [...new Set(res)].sort().join('')
  }

console.log(longest("aretheyhere", "yestheyarehere"))
// "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
// "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"))
// "acefghilmnoprstuy"