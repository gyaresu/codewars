function Converter(){}

Converter.toAscii = function (hex) {
  return hex.replace(/../g, function (h) {
    return String.fromCharCode(parseInt(h, 16))
  })
}

Converter.toHex = function (ascii) {
  return ascii.replace(/./g, function (a) {
    return a.charCodeAt().toString(16)
  })
}

console.log(Converter.toHex('Look mom, no hands'))
console.log(Converter.toAscii('4c6f6f6b206d6f6d2c206e6f2068616e6473'))
