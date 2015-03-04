//http://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

module.exports = function (string) {
  var result = {},
      temp = string.split('');

  var count = function (element, index, array) {
    if (typeof(result[element]) !== 'number')
      result[element] = 1; 
    else
      result[element] += 1;

    console.log(result, element);
  };


  temp.forEach(count);

  return result;
};
