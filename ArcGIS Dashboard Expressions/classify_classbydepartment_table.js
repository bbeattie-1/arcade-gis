
function lab_use (value) {
  if (value == "Classwork") {
    return {
      icon: "classwork",
      color: "#fff"
    }
  } 
  else if (value == "Tutoring") {
    return {
      icon: "tutoring",
      color: "#fff"
    }
  } else if (value == "Other"){
    return {
      icon: "other",
      color: "#eeb111"
    }
  }
}

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
      return {
        icon: "GEOG",
        color: "#04d44d"
      };
    }
  }
  for (var i in classes_ESCI) {
    if (value == classes_ESCI[i]) {
      return {
        icon: "ESCI",
        color: "#00bfff"
      };
    }
  } 
  return {
    icon: "other",
    color: "#eeb111"
  };
}



return {
  cells: {
    CreationDate: {
      displayText : Text($datapoint.CreationDate, "MMM. D Y | hh:mm a"),
      textColor: '',
      backgroundColor: '',
      textAlign: 'left',
      iconName: 'calendar',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },
		
    first_name: {
      displayText : Proper($datapoint.first_name + " " + $datapoint.last_name),
      textColor: '',
      backgroundColor: '',
      textAlign: 'left',
      iconName: 'person',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },
		
    lab_use: {
      displayText : IIf($datapoint.lab_use == "Other", $datapoint.lab_use_other, $datapoint.lab_use),
      textColor: lab_use($datapoint.lab_use).color,
      backgroundColor: '',
      textAlign: 'left',
      iconName: lab_use($datapoint.lab_use).icon,
      iconAlign: '',
      iconColor: lab_use($datapoint.lab_use).color,
      iconOutlineColor: ''
    },
		
    class: {
      displayText : IIf(IsEmpty($datapoint.class_unlisted), $datapoint.class, `<p style="color: #eeb111">${Concatenate($datapoint.class, ": ", $datapoint.class_unlisted)}</p>`),
      textColor: '',
      backgroundColor: '',
      textAlign: 'left',
      iconName: classify($datapoint.class).icon,
      iconAlign: '',
      iconColor: classify($datapoint.class).color,
      iconOutlineColor: ''
    },
		
  }
}