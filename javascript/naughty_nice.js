var check = function (arr, bool) {
  var split = typeof arr === 'undefined' ? ['test']: arr.filter(function (each) {return each.wasNice === bool;});
  return split.map(function (each) {return each.name;});
};
    
var getNiceNames = function (people) {
  return check(people, true);
};

var getNaughtyNames = function (people) {
  return check(people, false);
};

var list = [{ name: 'Warrior reading this kata', wasNice: true }, { name: 'xDranik', wasNice: false },{name:'bob',wasNice: false}];

getNiceNames(list);
getNaughtyNames(list);
