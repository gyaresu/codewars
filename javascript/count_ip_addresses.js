/*
 * http://www.codewars.com/kata/526989a41034285187000de4/train/javascript
 * ipsBetween("10.0.0.0", "10.0.0.50") => returns 50 
 * ipsBetween("10.0.0.0", "10.0.1.0") => returns 256 
 * Math.pow(2,32) => returns 4294967296
 *
 * Calculate both IP address as single numbers and return the difference?
 */

function ipsBetween(start, end){
  var calc = function (ip) {
    var total_s;
    var a = Math.pow(256,3);
    var b = Math.pow(256,2);
    var intify = function (each) {
      return parseInt(each);
    };
    var s = ip.split('.'); 
    var arr_s = s.map(intify);
    total_s = arr_s[0] * a + arr_s[1] * b + arr_s[2] * 256 + arr_s[3]; 
    return total_s;
  };
  var s = calc(start);
  var e = calc(end);
  return e - s;
}
