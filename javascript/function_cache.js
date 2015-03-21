/*var all = {};
var bigfunc = function (arg1, arg2) {
  return arg1 + arg2;
};

var cache = function (bigfunc) {
  bigfunc(arguments[1], arguments[2]);
  
};

cache(2,3);
*/
var complexFunction = function(arg1, arg2) { console.log(arg1, arg2);};
var cache = function (func){ };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
