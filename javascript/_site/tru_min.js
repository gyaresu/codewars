function min(a,b){  
  a = Number(a);
  b = Number(b);
  if (isNaN(Number(a)) || isNaN(Number(b)))
    return NaN;
  return (Number(a)<Number(b))?a:b;
}
console.log(min(process.argv[2], process.argv[3]));

/*
Top solution:

function min(a, b){
  return !isNaN(a) && !isNaN(b) ? ((a<b)?a:b)+0 : 'NaN';
}
*/
