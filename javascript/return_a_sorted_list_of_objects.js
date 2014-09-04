function sortList(sortBy, list) {
  list.sort(function(a,b) {
    return b[sortBy]-a[sortBy];
  });
  return list;
}

var obs = [{a:1,b:3},{a:3,b:2},{a:2,b:40},{a:4,b:12}];

console.log(sortList('b', obs)); 
