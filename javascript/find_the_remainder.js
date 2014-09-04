function remainder (a, b) {
  // Divide the larger arguemnt by the smaller argument and return the remainder
  if (a === 0 || b === 0)
    return NaN;
  else if (a > b) 
    return a % b;
  else 
    return b % a;
}

console.log(remainder(10,50));

/* Other solutions:
 *
 * function remainder(a, b){
 *   return a > b ? a % b : b % a;
 *   }
 *
 * function remainder(a, b){
 *  return Math.max(a,b) % Math.min(a,b);
 * }
 *
 */
