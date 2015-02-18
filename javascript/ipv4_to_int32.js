// http://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript

module.exports = function(ip) {
  var split = ip.split('.');
  var tobin = split.map(function (i) {
    var x = Number(i).toString(2);
    x = ('00000000' + x).slice(-8);
    return x;
  });
  var bigbin = tobin.join('');
  return parseInt(bigbin, 2);
};
