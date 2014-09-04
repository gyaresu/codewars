function Animal (name, type) {
  this.name = name;
  this.type = type;
  this.toString = function () {
    var result = this.name + " is a " + this.type;
    return result;
  };
}

Animal.prototype.thing = function (thing) {
  this.thing = thing;
};

var dog = new Animal('max', 'dog');

console.log(dog.toString());
console.log(dog.thing = 'wooble');
