// takes an array of items and returns the sum of unique items
module.exports = function (lst) {
  return [...new Set(lst)].reduce(function (sum, value) { return sum + value }, 0)
}
