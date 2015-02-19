// http://www.codewars.com/kata/54466996990c921f90000d61/train/javascript

module.exports = function (arr) {
  var item = true,
      temp;

  var check = function (element, index, array) {
    console.log(typeof(temp), typeof(element), temp, element);
    if (index === 0)
      temp = element;
    else if (temp > element)
      item = false;
    else
      temp = element;
  };

  arr.forEach(check);
  return item;
};

