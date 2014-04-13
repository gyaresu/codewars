function solution(str, ending) {
  var re = new RegExp("(" + ending + ")$");
  return re.test(str);
}

console.log(solution(process.argv[2], process.argv[3]));

// Alternate solution:
//
// function solution(str, ending){
//  return str.substring(str.length - ending.length) == ending;
// } 
