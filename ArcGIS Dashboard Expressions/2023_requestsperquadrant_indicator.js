
var p = Portal('https://lpta.maps.arcgis.com/');

var quadrants = FeatureSetByPortalItem(p,'c9f3e50326a9459a9563981fbadea273',0,['Label', 'abbreviation'],true);
var requests = FeatureSetByPortalItem(p,'9292b2a9599a4c158c9d1b50ae32f02b',0,['OBJECTID'],true);

var fs = [];
var f;

for (var i in quadrants) {
    var pts = Contains(i, requests);
    f = { 
        'attributes': { 
            'Quadrant': i['Label'],
            'Abbreviation': i['abbreviation'], 
            'Requests': Count(pts),
        }
    };
    Push(fs, f);
};

var fs_schema = { 
    'fields': [
        {'name': 'Quadrant', 'alias': 'Quadrant:', 'type': 'esriFieldTypeString'},
        {'name': 'Abbreviation', 'alias': 'Abbreviation:', 'type': 'esriFieldTypeString'},
        {'name': 'Requests', 'alias': 'Requests:', 'type': 'esriFieldTypeInteger'}
    ],
  'geometryType': '', 
  'features': fs 
}; 

return FeatureSet(fs_schema);