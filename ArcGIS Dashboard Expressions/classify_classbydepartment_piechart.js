// Portal
var p = Portal('https://mvilleu.maps.arcgis.com/');

var table = FeatureSetByPortalItem(p, '1e7c55479e4448e3be9befd871d4cad8')


var classes_GEOG =[
    "Biogeography",
    "Environmental Sustainability",
    "GIS I: Vector Data Analysis",
    "GIS Modeling",
    "Geography of Pennsylvania",
    "Human Geography",
    "Intro to Environmental Science",
    "Maps and GIS",
    "North America",
    "Transportation Geography",
    "Water Resources Management",
    "World Regional Geography"
]

var classes_ESCI = [
    "Applied Geophysics",
    "Applied Geophysics: Lab",
    "Atmosphere with Lab: Lab",
    "Atmosphere with Lab: Lecture",
    "Atmospheric Dynamics 1",
    "Climate Dynamics",
    "Cloud Physics & Precip Process",
    "Disaster Mgmt & Comm Risk Redu",
    "Disaster Response & Recovery",
    "Earth Systms and Naturl Hazrds",
    "Emergency Mgmt Planning",
    "Environmental Geology",
    "Environmental Geology: Lab",
    "Exp: Weather Risk Mgmt",
    "FORTRAN for ESCI Applications",
    "Geology of Earth & Energy Reso",
    "Intro to Emergency Mgmt",
    "Intro to Oceanography",
    "Intro to Oceanography: Lab",
    "Meteorology",
    "Meteorology: Lab",
    "Physical Geology",
    "Physical Geology: Lab",
    "Remote Sensing and Image Inter",
    "Structural Geology: Lec",
    "Structural Geology: Lab",
    "Synoptic Meteorology Lec-Lab",
    "The Atmosphere",
    "The Origins of Space Weather",
    "The World Ocean",
    "Topics: Tech Appl EMGT"
]

function classify(value) {
  for (var i in classes_GEOG) {
    if (value == classes_GEOG[i]) {
      return "Geography"
    }
  }
  for (var i in classes_ESCI) {
    if (value == classes_ESCI[i]) {
      return "Earth Sciences"
    }
  } 
  return "Other"
}

var features = [];
var feat;

for (var row in table) {

var department = classify(row.class)

    feat = { 
        'attributes': { 
            'Class': row.class, 
            'Department': department
        }
    };
    
    Push(features, feat);
};

var out_dict = { 
    'fields': [
        {'name': 'Class', 'alias': 'Class:', 'type': 'esriFieldTypeString'},
        {'name': 'Department', 'alias': 'Department:', 'type': 'esriFieldTypeString'}
    ],
  'geometryType': '', 
  'features': features 
}; 


return FeatureSet(Text(out_dict));