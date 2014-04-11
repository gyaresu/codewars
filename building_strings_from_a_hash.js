function solution(pairs) {
  var keys = Object.keys(pairs);
  var result = "";
  for (var i = 0; i < keys.length; i++)
    if (i == keys.length - 1) {
      result += (keys[i] + " = " + pairs[keys[i]]);
    } else {
      result += (keys[i] + " = " + pairs[keys[i]] + ",");
    }
  return result;
}

console.log(solution({a:2,b:"thing"}));
//solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
