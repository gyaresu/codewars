function Animal (name, type) {
  this.name = name;
  this.type = type;
  this.toString = function () {
    var result = this.name + " is a " + this.type;
    return result;
  };
}

var dog = new Animal('max', 'dog');

console.log(dog.toString());
