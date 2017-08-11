var fibonacci = require('fibonacci')

function productFib(prod){
  var last = 0
  var solution
  
  fibonacci.on ('result', function (num) {
    if (num.number * last === prod) {
      solution = [last, num.number, true]
      fibonacci.kill()
    } else {
      solution = [last, num.number, false]
      fibonacci.kill
    }
   
    if (num.ms > 4000) {
      console.log ('Done!');
      fibonacci.kill ();
    }
  });
   
  // run this AFTER everything 
  fibonacci.iterate ();
  //return solution
	console.log(solution)
}

productFib(4895)
