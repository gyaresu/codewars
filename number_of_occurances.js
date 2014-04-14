Array.prototype.numberOfOccurrences = function(i) {
  var total = 0;
  this.filter(function (x) {
    if (i === x)
      total++;
  });
  return total;
};

var arr = [0,1,2,2,3];

console.log(arr.numberOfOccurrences(0));// === 1;
console.log(arr.numberOfOccurrences(4));// === 0;
console.log(arr.numberOfOccurrences(2));// === 2;
console.log(arr.numberOfOccurrences("a"));// === 0;

// Top solution:
//
// Array.prototype.numberOfOccurrences = function(n) {
//   return this.filter(function(x){return x==n;}).length;
// }
//
