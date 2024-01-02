var str = "How can mirrors be real if our eyes aren't real"
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
  };

  console.log(str.toJadenCase())