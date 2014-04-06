var flatten = function (array) {
  var result = [];
  if (array.length <= 1)
    return array;
  for (var i = 0; i < array.length; i++)
    for (var j = 0; j < array.length; j++)
      result.push(array[i][j]);
  return result;
};

console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));
console.log("This?: " + flatten([[[1,2,3]]])); // => [
console.log(flatten([1,2,3])); // => [1,2,3]
console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));  // => [1,2,3,"a","b","c",1,2,3]
console.log(flatten([[[1,2,3]]])); // => [[1,2,3]]
