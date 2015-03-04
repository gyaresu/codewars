function getMissingElement(array){
  array.sort();
  for (var i = 0; i <= array.length; i++)
    if (array[i] !== i)
      return i;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
