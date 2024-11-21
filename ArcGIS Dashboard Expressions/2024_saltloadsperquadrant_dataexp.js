var p = Portal("https://lpta.maps.arcgis.com/")
var surveyItemID = '04830a52f85f40c2b2ee66bc38407555'

var surveyFeatures = FeatureSetByPortalItem(p, surveyItemID)

var f;
var fs = [];
var fset;

for (var i in surveyFeatures) {
  f = {
    attributes: {
  'stormStartDate': i['stormStartDate'],
  'estimatedSaltNorth': i['saltLoadsNorth'] * i['estimatedTruckCapacity'],
  'estimatedSaltSouth': i['saltLoadsSouth'] * i['estimatedTruckCapacity']
    }
  }
  Push(fs, f)
}

fset = {
  features: fs,
  fields: [
    {name: 'stormStartDate' , alias: 'stormStartDate', type: 'esriFieldTypeDate' },
    {name: 'estimatedSaltNorth' , alias: 'estimatedSaltNorth', type: 'esriFieldTypeInteger' },
    {name: 'estimatedSaltSouth' , alias: 'estimatedSaltSouth', type: 'esriFieldTypeInteger' }
  ],
  geometry: '',
}

var tonnagePerQuadrantFeatureSet = FeatureSet(fset)

GroupBy(tonnagePerQuadrantFeatureSet, 'stormStartDate', [
  {name: 'totalEventSaltNorth', expression: 'estimatedSaltNorth', statistic: 'SUM' },
  {name: 'totalEventSaltSouth', expression: 'estimatedSaltSouth', statistic: 'SUM' }
])