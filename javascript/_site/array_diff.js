// http://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

module.exports = function (a, b) {
  var indicies = [];
  
//   a.map(function (x) {
//     for (var i = 0; i < b.length; i++)
//       console.log("x =", x,"i =", i, b.length, "Outside the if b.length");
//       x === b[i-1] || indicies.push(x);
//       console.log(i, ":", indicies);
//       //console.log("success:","x =",x,"i =", i,"b[i-1] =", b[i-1],"b.indexOf(x) =", b.indexOf(x));
//   });
// 

  a.map(function (x) {
    b.indexOf(x) >= 0 || indicies.push(x);
    console.log(x, b.indexOf(x), indicies);
  });

  console.log("Final array:",indicies);

};
