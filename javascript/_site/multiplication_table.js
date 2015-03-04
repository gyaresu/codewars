//http://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
//
//

module.exports = function(size) {
  if (typeof(size) != 'number') 
    throw "not a number";

  var start_size = size;
  var result = [];

  var addum = function (first) {
    var temp_array = [];
    for (var i = 1; i <= size; i++)
      temp_array.push(i*first);
    return temp_array;
  };

  for (var i = 1; i <= start_size; i++)
    result.push(addum(i));

  return(result);
};

