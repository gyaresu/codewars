function solution(str, ending) {
  for (var i = 0; i < ending.length; i++)
    console.log(str[str.length - 1 - i] + " " + ending[ending.length -1 - i]);
    if (str[ending.length - 1 - i] !== ending[ending.length -1 - i]) {
      return false;
    }
  return true;
}

console.log(solution("sumo", "omo"));


//console.log(str[ending.length - 1 - i] + " " + ending[ending.length -1 - i]);
