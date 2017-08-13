function rot13(message){
  var a = 'abcdefghijklmnopqrstuvwxyz'
  return message.replace(/[A-Za-z]/g, function (i) {
    if (i === i.toUpperCase()) {
      var temp = a.indexOf(i.toLowerCase())
      if (temp + 13 > 25) {
        return a.charAt(temp + 13 - 26).toUpperCase()
      } else {
        return a.charAt(temp + 13).toUpperCase()
      }
    } else {
      var temp = a.indexOf(i)
      if (temp + 13 > 25) {
        return a.charAt(temp + 13 - 26)
      } else {
        return a.charAt(temp +13)
      }
    }
  })
}
