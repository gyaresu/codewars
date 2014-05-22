var item;
function Adam() {
  return this.name + " ";
}
function has() {}
function a() {}
function dog() {}
function The() {}
function name() {}
function of() {}
function the() {}
function is() {}
function also() {}

//var Adam = new Adam();
console.log(Adam(has(a(dog())))); // must return "Adam has a dog."
console.log(The(name(of(the(dog(is(also(Adam())))))))); // must return "The name of the dog is also Adam."
