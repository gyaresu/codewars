function searchNames (logins) {
  var filtered = logins.filter(function (item) {
    var temp = item[0];
    var x = temp.length-1;
    return item[0][x] === '_';
  });
  return filtered;
}

var list = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ];

console.log(searchNames(list));


/* The tests:
* 
*  describe( "Testing some lists", function(){
*   it( "Basic list", function(){
*     var a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ],
*     b = [ [ "bar_", "bar@bar.com" ] ];    
*     Test.assertSimilar( searchNames( a ).join(":"), b.join(":"),
*       "not correct" );
*   } );
*  } )
* 
* The top solution:
* 
* function searchNames( logins ){
*   return logins.filter(function(v) {
*     return /_$/.test(v[0]);
*   });
* }
*  
*/
