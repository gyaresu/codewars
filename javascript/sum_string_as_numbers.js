//http://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
//Given the string representations of two integers, return the string representation of the sum of those integers.
//
//For example:
//
//sumStrings('1','2') // => '3'
//
//A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
//
function sumStrings(a,b) { 
  var first = parseInt(a),
      second = parseInt(b);
      
  if (!isNaN(first) && !isNaN(second))
    return (first + second).toString();
  else 
    return (isNaN(first)) ? second.toString(): first.toString();
}
sumStrings('1','2'); // => '3'
