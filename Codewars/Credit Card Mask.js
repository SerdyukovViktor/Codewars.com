function maskify(cc) {
    let str1 = cc.slice(0, -4)
    let str2 = cc.slice(-4)

  return cc.length < 4 ? cc : str1.replace(/[0-9]/g, '#') + str2;
}

console.log(maskify('4556364607935616'), '<< ############5616');
// console.log(maskify('1'), '1');
// console.log(maskify('11111'), '#1111');