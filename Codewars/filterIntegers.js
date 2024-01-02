function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr =[];
    l.map(val => val === +val ? arr.push(val) : false);
    return arr;
  }

  console.log(filter_list([1,2,'a','b']), ': Out [1,2]');
  console.log(filter_list([1,'a','b',0,15]), ': Out [1,0,15]');
  console.log(filter_list([1,2,'aasf','1','123',123]), ': Out [1,2,123]');