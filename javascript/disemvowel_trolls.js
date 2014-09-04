function disemvowel(string) {
  return string.split('').map(function (x) {
    var re = /([aeiou])/gi;
    if (!re.test(x)) {
      return x;
    }
  }).join('');
}
console.log(disemvowel(process.argv[2]));

