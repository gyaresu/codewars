function Foo (value) {
  this.val = value;
};

var foo = new Foo(2);     // foo.val = 2;
var boo = new Foo(3);    // boo.val = 3;

console.log(foo + boo);
