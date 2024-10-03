// Takes ID Field if empty, says verify, if not then shows ID

IIf(IsEmpty($feature.ID),"Verify",$feature.ID)

// Takes Category Abbreviation and turns it into Full Name

IIF($feature.Category == "PW", "Production Well",
IIF($feature.Category == "CP", "Control Probe",
IIF($feature.Category == "M", "Monitor Port", "")))

//Colors Based On Field Attributes (Can Be Pasted Into HTMl TO Color Text) As #{expression/attribute2), Need To Color Text First, then open the HTML Source

attribute2: 
    IIF($datapoint.leaf_density == "Low", 'e0cc14',
    IIF($datapoint.leaf_density == "Medium", "ff9100",
    IIF($datapoint.leaf_density == "High", "ad0202", "")))

// If Either First Name Or Last Name is Blank, then returns “string”, if not it adds them.

IIf(($datapoint.first_name == null || $datapoint.last_name== null ), "Anonymous Resident", $datapoint.first_name + " "+ $datapoint.last_name),
