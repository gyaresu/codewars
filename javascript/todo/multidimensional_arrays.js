/* http://www.codewars.com/kata/5402724fd39b43c075000116/train/javascript
 *
 * function myConcat(separator) {
 *   var args = Array.prototype.slice.call(arguments, 1);
 *   return args.join(separator);
 * }
 *
 * returns "red, orange, blue"
 * myConcat(", ", "red", "orange", "blue");
 *
 * returns "elephant; giraffe; lion; cheetah"
 * myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
 *
 * returns "sage. basil. oregano. pepper. parsley"
 * myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
 */

function dim(args) {
  for (var i = 0; i <= args.length; i++) 
    console.log(args.length -1 ); 
}
dim('asdf','werw');
