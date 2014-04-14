var Calculator = {
 average: function(args) {
   if (typeof(args) === 'undefined' || args.length === 0) {
     return 0;
   } else {
     var items = Array.prototype.slice.call(arguments);
     var sum = items.reduce(function (a,b) {
       return a + b;
     });
     return sum/items.length;
   }
 }
};

console.log(Calculator.average([2,3]));

// Alternate solution:
//
// var Calculator = {
//  average: function() {
//   for (var s=0,i=0; i<arguments.length;++i) s += arguments[i];
//   return i?s/i:0;
//  }
// };
