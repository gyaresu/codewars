function noOdds(values) {
  return values.filter( function (item) {
    return item % 2 === 0;
  });
}
console.log(noOdds([1,2,3,4,5,6]));//process.argv[2]);
