// http://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/discuss/javascript
function f(n){
  return (n % 1 === 0 && n > 0) ? (n/2) * (n+1): false;
};

// https://www.gmatpill.com/sum-sequence-consecutive-integers-multiples/
//
// General Strategy Sum of Arithmetic Sequence
//
// [ sum of sequence ] = [ # of terms / 2 ] x [ sum of first and last ]
//
// Let’s first try an example, then explain why it works.
//
// {1, 2, 3, 4, 5 }
// Sum of Sequence = (5/2) * (1 + 5) = 15
//
// {11, 12, 13, 14, 15}
// Sum of Sequence = (5/2) * (11 + 15) = 65 
