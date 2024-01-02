// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
var fg = 'CD'

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase();
  }

  console.log(String.prototype.isUpperCase('c'))