function getEvenNumbers(numbersArray) {
  var result = numbersArray.filter(function (item) { return item % 2 === 0; });
  return result;
}

console.log(getEvenNumbers([2,4,5,6])); // should == [2,4,6]
