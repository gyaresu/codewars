/* http://www.codewars.com/kata/52190daefe9c702a460003dd/train/javascript
 * Return substring instance count - 2
 *
 * searchSubstr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
 * searchSubstr('aaabbbcccc', 'bbb') # should return 1
 * searchSubstr( 'aaa', 'aa' ) # should return 2
 * searchSubstr( 'aaa', '' ) # should return 0
 * searchSubstr( 'aaa', 'aa', false ) # should return 1
 */
function searchSubstr( fullText, searchText, allowOverlap ){
  var re = RegExp(searchText, 'gi'),
      result;

  if (searchText === '' || fullText === '') {
    return 0;
  } else if (allowOverlap === false) {
    result = fullText.match(re);
    return result.length;
  } else {
    re = RegExp(searchText, 'g');
    var matches = [],
        found;
    while (found = re.exec(fullText)) {
      matches.push(found[0]);
      re.lastIndex = found.index+1;
    }
    return matches.length;
  }
}

console.log(searchSubstr('aaabbbccbbbcc', 'bbb', true));
console.log(searchSubstr('aaabbbccbbbcc', '', true));
