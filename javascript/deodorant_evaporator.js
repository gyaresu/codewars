function evaporator(content, evap_per_day, threshold){ 
  var day = 1
  var newContent = content
  var percent = threshold/100
  var evapPerDay = evap_per_day/100
  var minVol = content * percent
  
  while (newContent > minVol) {
    newContent = newContent - (newContent * evapPerDay)
    day++
		console.log(newContent)
  }
  console.log(day);
}

evaporator(10, 10, 10)
