function Calculator (a,b) {
  Calculator.prototype.add = function (a,b) {
    return a + b;
  };
  Calculator.prototype.subtract = function (a,b) {
    return a - b;
  };
  Calculator.prototype.multiply = function (a,b) {
    return a * b;
  };
  Calculator.prototype.divide = function (a,b) {
    if (a === 0 || b === 0)
      return false;
    return a / b;
  };
}


var Calculator = new Calculator();

console.log(Calculator.add(2,3));
console.log(Calculator.subtract(2,3));
console.log(Calculator.multiply(1112,3));
console.log(Calculator.divide(6,3));
