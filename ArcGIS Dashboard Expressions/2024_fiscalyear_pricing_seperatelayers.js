var p = Portal("https://lpta.maps.arcgis.com/")
var eventItemID = '04830a52f85f40c2b2ee66bc38407555'
var pricingItemID = '0be7ebd7e3424d328a4a2ef7425a4989'

var saltInventoryLayer = FeatureSetByPortalItem(p, eventItemID)
var pricingInventoryLayer = FeatureSetByPortalItem(p, pricingItemID)

var saltInventoryGrouped = GroupBy(saltInventoryLayer, 'stormStartDate', {name: 'TotalSaltTons', expression: 'estimatedTruckLoad', statistic: 'SUM'})

function getPrice (stormDate) {
  var dateBefore = DateAdd(stormDate, -1, 'years')
  var dateAfter = DateAdd(stormDate, 1, 'years')
  var priceDateFilteredFeatureSet = Filter(pricingInventoryLayer, "yearPricing > @dateBefore AND yearPricing < @dateAfter")
  var capcogPrice = First(priceDateFilteredFeatureSet)['capcogPricing']
  var costarsPrice = First(priceDateFilteredFeatureSet)['costarsPricing']
  return {
    costarsPrice: costarsPrice,
    capcogPrice: capcogPrice
  }
}

var f;
var fs = [];
var fset;

for (var i in saltInventoryGrouped) {
  
  f = { 
      'attributes': { 
          'stormStartDate': i['stormStartDate'],
          'totalSaltUsed': i['TotalSaltTons'], 
          'pricingCOSTARS': getPrice(i['stormStartDate']).costarsPrice,
          'pricingCapCOG': getPrice(i['stormStartDate']).capcogPrice,
          'eventCost': Round(getPrice(i['stormStartDate']).capcogPrice * i['TotalSaltTons'], 2),
      }
  };

  Push(fs, f);
}


fset = { 
  'fields': [
      {'name': 'stormStartDate', 'alias': 'stormStartDate:', 'type': 'esriFieldTypeDate'},
      {'name': 'totalSaltUsed', 'alias': 'totalSaltUsed:', 'type': 'esriFieldTypeInteger'},
      {'name': 'pricingCOSTARS', 'alias': 'pricingCOSTARS:', 'type': 'esriFieldTypeDouble'},
      {'name': 'pricingCapCOG', 'alias': 'pricingCapCOG:', 'type': 'esriFieldTypeDouble'},
      {'name': 'eventCost', 'alias': 'eventCost:', 'type': 'esriFieldTypeDouble'}
  ],
  'features': fs, 
  'geometryType': ''
}; 


FeatureSet(fset);
