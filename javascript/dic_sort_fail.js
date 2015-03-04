// http://www.codewars.com/kata/53da6a7e112bd15cbc000012/train/javascript

function sortDict(dict){
  var result = [];
  var keys = Object.keys(dict);
  console.log(keys, dict);
  for (var i = 0; i < keys.length; i++)
    //var temp = JSON.parse("[" + keys[i] + "," + dict[keys[i]] + "]");
    console.log(keys[i] + " " + dict[keys[i]]);
    var x = [keys[i], dict[keys[i]]];
    console.log("This is x: ", x);
    result.push(JSON.parse(x));  

  console.log(result);
}

sortDict({"c":4,"a":6,"b":2});
//sortDict({3:1,2:2,1:3}); // == [[1,3],[2,2],[3,1]];
//sortDict({1:2,2:4,3:6});// == [[3,6],[2,4],[1,2]];

