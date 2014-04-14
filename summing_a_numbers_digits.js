function sumDigits(number) {
  var x = Math.abs(number);
  var i = [];
  i =  x.toString().split('');
  if (i.length > 1)
    return i.reduce(function (a,b) {
      return parseInt(a) + parseInt(b);
    });
  else 
    return parseInt(i);
}

console.log(sumDigits(2342));
