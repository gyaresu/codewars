function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return (name === "Santa Clause" && password === "Ho Ho Ho!")?true:false; 
};

var sleigh = new Sleigh();

console.log(sleigh.authenticate("Santa Clause", "Ho Ho Ho!"));
console.log(sleigh.authenticate("Bob Clause", "Ho Ho Ho!"));
