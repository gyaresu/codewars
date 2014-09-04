function reject (array, iterator) {
  var map = array.map(iterator);
  var result = [];
  var index = 0;
  array.filter(function (item) {
      if (map[index] === false)
        result.push(array[index]);
      index++;
  });
  return result;
}

var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 3 === 0; });// => [1, 3, 5]
console.log(odds);

// Top solution:
//
// Damn! I did this but I messed up the '!' position...
// 
// function reject(array, iterator) {
//   return array.filter(function(val){ return !iterator(val) })
//   }
