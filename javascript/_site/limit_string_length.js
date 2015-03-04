function solution(string,limit){
  if (limit >= string.length)
    return string;
  return string.substring(0,limit) + "...";
}

console.log(solution('Testing String',3)); // should return 'Tes...'
console.log(solution('Testing String',8)); // should return 'Testing ...'
console.log(solution('Test',8)); // should return 'Test'

//  Alternate solution:
//
//  function solution(string,limit){
//    return string.length > limit ? string.substr(0,limit) + "..." : string;
//  }
