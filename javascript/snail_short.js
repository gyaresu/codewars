var array = [[1,2,3],
         [4,5,6],
         [7,8,9]];

var snail = function(arr) {
  //4*4 array: 4,3,3,2,2,1,1
  //3*3 array: 3,2,2,1,1
  var result = [];
  var first = function (array) {
    if (array.length === 0)
      return;
    var cut = array.shift();
    cut.forEach(function (each) {result.push(each);});
  };
  var second = function (array) {
    if (array.length === 0)
      return;
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
  };
  var third = function (array) {
    if (array.length === 0)
      return;
    for (var i = 0; i < array[0].length; i++)
      result.push(array[array.length -1].pop());
    array.pop();
  };
  var fourth = function(array) {
    if (array.length === 0)
      return;
    for (var i = array.length -1; i > 0; i--)
      result.push(array[i].shift());
    console.log(result, array);
  };

  while (array.length > 0) {
    first(array);
    second(array);
    third(array);
    fourth(array);
  }
  
};

snail(array);
