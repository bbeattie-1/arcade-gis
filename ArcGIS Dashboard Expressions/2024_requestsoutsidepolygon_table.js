var portal1 = Portal("https://lpta.maps.arcgis.com/");

var registrations = FeatureSetByPortalItem(portal1, "b5ddf4899efd4a24ada999c6ef6e3a26", 0, ["*"]);
var township_boundary = First(FeatureSetByPortalItem(portal1, "50df6fec92824500a3e663c503280adb", 0, ["*"]));
var buffered_boundary = Buffer(township_boundary, 40, 'miles')
var outside_area = Difference(buffered_boundary, township_boundary)
var outside_registrations = Intersects(registrations, outside_area)

outside_registrations