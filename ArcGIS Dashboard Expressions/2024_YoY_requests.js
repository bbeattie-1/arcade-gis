var p = Portal('https://lpta.maps.arcgis.com/')

var todayNow = Text(DateAdd(Timestamp(), 1, 'days'), 'YYYY-MM-DD')
var todayOneYearAgo = Text(DateAdd(DateAdd(Timestamp(), -1, 'years'), 25.85, 'hours'), 'YYYY-MM-DD h:m')

Console(todayNow)
Console(todayOneYearAgo)

var currentRequests2024 = Count(Filter(FeatureSetByPortalItem(p, '0bb3881dc3f8405b89ca145e9bd52f6e', 0, ['objectid'], false), "datetime > '2024-09-01' AND datetime < @todayNow"))
var currentRequests2023 = Count(Filter(FeatureSetByPortalItem(p, '0bb3881dc3f8405b89ca145e9bd52f6e', 0, ['objectid'], false), "datetime > '2023-09-01' AND datetime < @todayOneYearAgo"))



var YoYRequestChange = IIF(currentRequests2023 == 0, ((currentRequests2024/(currentRequests2023 + 1)) * 100 ), ((currentRequests2024 - currentRequests2023) / currentRequests2023) * 100)

var f = {
  attributes: {
    currentRequests2024: currentRequests2024,
    currentRequests2023: currentRequests2023,
    YoYRequestChange: YoYRequestChange
  }
}

Console(((currentRequests2024/(currentRequests2023 + 1)) * 100 ))

var fs = []
Push(fs, f)
var fs_schema = {
  fields: [
    {name: 'currentRequests2024', 'alias': 'Fall2024_Requests', 'type': 'esriFieldTypeInteger' },
    {name: 'currentRequests2023', 'alias': 'Fall2023_Requests', 'type': 'esriFieldTypeInteger' },
    {name: 'YoYRequestChange', 'alias': 'YoYRequestChange', 'type': 'esriFieldTypeDouble' }
  ],
  geometryType: '',
  features: fs
}

FeatureSet(fs_schema)
