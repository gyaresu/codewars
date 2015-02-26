module.exports = function (names) {
  var nicelist = [],
      naughtylist = [];
      
  var nice = function (each) {
      if (each.wasNice === true)
        nicelist.push(each.name);
  };

  var naughty = function (each) {
     if (each.wasNice === false)
      naughtylist.push(each.name);
  };
   
  function getNiceNames(people){
      var i = typeof people !== 'undefined' ? people.map(nice): [];
      console.log(nicelist);
  }

  function getNaughtyNames(people){
      var i = typeof people !== 'undefined' ? people.map(naughty): [];
      console.log(naughtylist);
  }

  getNiceNames(names);
  getNaughtyNames(names);

};
