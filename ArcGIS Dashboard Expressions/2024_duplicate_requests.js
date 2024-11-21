var p = Portal('https://lpta.maps.arcgis.com/');

var requests = Filter(FeatureSetByPortalItem(p,'9292b2a9599a4c158c9d1b50ae32f02b',0,['address_text'],true),"datetime > '2024-09-01'");
var groupedRequests = GroupBy(requests, ['address_text'], {name: 'requestsByAddress', expression: '1', statistic: 'COUNT'})
var groupedRequestsFiltered = OrderBy(Filter(groupedRequests, "requestsByAddress > 1"), "requestsByAddress DESC")

groupedRequestsFiltered
