function GetSum (a, b) {
  if (a === b) {
    return a
  } else if (a < b) {
    return Array.from(new Array(Math.abs(b - a) + 1), (_, i) => i + a)
      .reduce((sum, value) => sum + value)
  } else {
    return Array.from(new Array(Math.abs(a - b) + 1), (_, i) => i + b)
      .reduce((sum, value) => sum + value)
  }
}

console.log(GetSum(26, 244)) // 29565

// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }

// function GetSum( a,b )
// {
//    if (a == b) return a;
//    else if (a < b) return a + GetSum(a+1, b);
//    else return a + GetSum(a-1,b);
// }
