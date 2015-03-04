function flatten(array) {
  var result = [];
  array.forEach(function (item) {
    if (!Array.isArray(item))
      result.push(item);
    else 
      for (var i = 0; i < item.length; i++)
        result.push(item[i]);
  });
  return result;
}

console.log(flatten([1,2,3])); // => [1,2,3]
console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));  // => [1,2,3,"a","b","c",1,2,3]
console.log(flatten([[[1,2,3]]])); // => [[1,2,3]]

// Top solutions:
//
// var flatten = function (lol){
//   return [].concat.apply([],lol);
//   }
//
// ---
//
// var flatten = Function.prototype.apply.bind(Array.prototype.concat, []);
//
// ---
//
