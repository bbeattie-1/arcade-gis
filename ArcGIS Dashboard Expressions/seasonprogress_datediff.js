var season_start = Date(2024, 9, 21); //October 21st 2024
var season_end = Date(2025, 0, 3); //January 3rd 2025

var season_length = DateDiff(season_end, season_start, "days");
var season_progress = DateDiff(Today(), season_start, "days");

Console("Season Length: " + season_length + " Days");
Console("Season Progress: " + season_progress + " Days");

var fs = [];
var f;

f = {
  attributes: {
    "Season Progress": season_progress,
  },
};

Push(fs, f);

var fs_schema = {
  fields: [
    {
      name: "Season Progress",
      alias: "Season Progress",
      type: "esriFieldTypeInteger",
    },
  ],
  geometryType: "",
  features: fs,
};

return FeatureSet(fs_schema);
