//Symbolizes A Moving Truck Path Based Upon Last Time Feature Was Created
//Used In Public Works Line Painting Field Maps Applicaiton

var time_diff = Round(DateDiff(Now(), $feature.CreationDate, 'minutes'),0)

if (time_diff < 30){
  return "Past Half-Hour"
}
else if (time_diff >= 30 && time_diff <= 120){
  return "Past 2 Hours"
}
else {
  return "Beyond 2 Hours"
}