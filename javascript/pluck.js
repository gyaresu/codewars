function pluck(objs, name) {
  var result = [];
  objs.forEach(function (obj) {
    return (obj.hasOwnProperty(name))?result.push(obj[name]):result.push(null);
  });
  return result;
}

console.log(pluck([{a:1}, {a:2}], 'a')); // -> [1,2]

// Top solution:
//
// function pluck(objs, name) {
//   return objs.map(function(obj) { return obj[name] });
// }
