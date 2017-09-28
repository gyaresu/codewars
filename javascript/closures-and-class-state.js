// Cat constructor, requiring arguments for name and weight
// Throw an error if name or weight not specified when invoking the constructor.
// Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
// Must use Object.defineProperty

let Cat = (function (name, weight) {
  let totalWeight, catCount
  totalWeight += weight
  catCount++

  averageWeight: () => {
    return totalWeight / catCount
  }
}())

let fluffy = new Cat('fluffy', 15)

console.log(fluffy