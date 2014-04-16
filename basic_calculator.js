function calculate(num1, o, num2) {
  if (o == '+')
    return num1 + num2;
  else if (o == '-')
    return num1 - num2;
  else if (o == '/')
    return (num1 === 0 || num2 === 0)?null: num1 / num2;
  else if (o == '*')
    return num1 * num2;
  else 
    return null;
}

// Top solution:
//
//  function calculate(num1, operation, num2) {
//    try {return eval(num1 + operation + num2)} 
//    catch(err) {return null};
//  }
