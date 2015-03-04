function keysAndValues(data) {
  var k = [];
  var v = [];
  var result = [];

  k = Object.keys(data);
  for (var key in data)
    v.push(data[key]);
  result[0] = k;
  result[1] = v;
  return result;
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
