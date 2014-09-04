function solution(nums){
  if (nums === null || nums.length === 0)
    return [];
  nums.sort(function(a,b) {
    return a - b;
  });
  return nums;
}

//var x = [10,100,11,1,50];
//var x = [];

console.log(solution(null));

/* The top solution:
function solution(nums){
    return (nums || []).sort(function(a, b){
          return a - b    
        });
}
*/
