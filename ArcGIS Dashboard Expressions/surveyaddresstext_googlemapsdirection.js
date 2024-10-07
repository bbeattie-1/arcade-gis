//Google Maps Directions API URL

function Directions(destination_input, travelmode_input) {
  var destination = UrlEncode(destination_input);
  var origin = UrlEncode("");
  var travelmode = travelmode_input;

  var directionsLink = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${travelmode}`;
  return directionsLink;
}
