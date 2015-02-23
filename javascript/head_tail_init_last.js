var head = function (arr) {
  return arr[0];
};

var tail = function (arr) {
  return arr.slice(1);
};
  
var init = function (arr) {
  return arr.slice(0, arr.length - 1);
};
  
var last = function (arr) {
  return arr.slice(-1)[0];
};
