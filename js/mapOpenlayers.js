
var mapOpenLayers = new ol.Map({
    target: 'mapOpenlayers',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-102.552788, 23.634501]),
      zoom: 4

    })
  });