
var vijverpark = { 

        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    4.608979225158691,
                    52.38975095490493
                  ],
                  [
                    4.608335494995117,
                    52.38950869052891
                  ],
                  [
                    4.608539342880249,
                    52.38865093299621
                  ],
                  [
                    4.609714150428771,
                    52.388781889422816
                  ],
                  [
                    4.6106261014938354,
                    52.38905689665412
                  ],
                  [
                    4.610390067100525,
                    52.38977387173652
                  ],
                  [
                    4.608979225158691,
                    52.38975095490493
                  ]
                ]
              ]
            }
          }
        ]
      }
      L.geoJSON(vijverpark).addTo(mapLeaflet)