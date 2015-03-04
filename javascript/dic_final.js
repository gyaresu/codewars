/*
 * Sorting Dictionaries - https://codewars.com 
 *
 * Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary.
 *
 * In this kata you will create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
 *
 * The list must be sorted by the value and be sorted largest to smallest.
 *
 * sortDict({3:1,2:2,1:3}) == [[1,3],[2,2],[3,1]]
 * sortDict({1:2,2:4,3:6}) == [[3,6],[2,4],[1,2]]
 * */

var dict = {"cat":4,"dog":6, "snake":4, "moose":2, 99: 42};

var keys = Object.keys(dict).reverse();
var result = [];

for (var i = 0; i <= keys.length -1; i ++) {
  var arr = [];
  if (isNaN(parseInt(keys[i]))) 
    arr.push(keys[i], dict[keys[i]]);
  else
    arr.push(parseInt(keys[i]), dict[keys[i]]);
  console.log(keys[i], typeof(keys[i]));
  result.push(arr);
}

var compare = function (a,b) {
  return a[1] - b[1];
};

var x = result.sort(compare).reverse();
console.log(typeof(x[0][0]), result);
