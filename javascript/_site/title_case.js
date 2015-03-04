//http://www.codewars.com/kata/title-case/solutions?show-solutions=1
// ::Doesn't work::
//
module.exports = function (title, minorWords) {
  var t = title.split(' '),
      m = [],
      fixed = '';

  m = minorWords.toLowerCase().split(' ');
  console.log("'t' :", t, typeof(m), fixed, typeof(fixed));

  var fix = function (element, index, array) {
    //console.log(index);
    if (index === 0) {
      console.log('pre: ' + fixed);
      fixed = fixed.concat(element.slice(0,1).toUpperCase());
      console.log("first bit: " + fixed);
      fixed = fixed.concat(element.slice(1).toLowerCase());
      console.log("next bit: " + fixed);
    } 
    else if (m.indexOf(element.toLowerCase()) === -1){
      fixed = fixed.concat(' ' + element.toUpperCase()[0]);
      fixed = fixed.concat(element.slice(1).toLowerCase());
      console.log("non-minor: " + fixed);
    } 
    else {
      fixed = fixed.concat( ' ' + element.toLowerCase());
      console.log("minor word: " + fixed);
    }

  };

  console.log(t, m);
  t.forEach(fix);
  console.log(fixed);
  return fixed;
};
