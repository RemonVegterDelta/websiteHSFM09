var mapLeaflet = L.map('mapLeaflet').setView([51.505, -0.09], 13);
	
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo( mapLeaflet );

var marker = L.marker([51.5, -0.09]).addTo(mapLeaflet);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mapLeaflet);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mapLeaflet);


//Lege geojson op leaflet maken
const geoJsonLayer = L.geoJSON().addTo(mapLeaflet);

function zoomOnClick(){
    mapLeaflet.setView([52.38592744,4.58153538],11)
}


//data ophalen
fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=gem-5d6cf3b7c87a93915c724628a6941214&fl=*')
.then(response => response.json())
.then(data =>{ 
const wkt = data.response.docs[0].geometrie_ll;
// WKT omzetten naar Geojson
const geojson = Terraformer.wktToGeoJSON(wkt);
console.log(geojson);
geoJsonLayer.addData(geojson);


//Titel toevoegen
const titel = document.getElementById
('interactiveTitle');
titel.style.color = '#009688'
titel.append('Overveen')

})

// const urlGeoserverWMSlaag = '//localhost:8080/geoserver/Aeres/wms?service=WMS&version=1.1.0&request=GetMap&layers=Aeres:Spoorvakken&styles=&bbox=634.5732789819012,306594.5543000576,284300.0254094796,636981.7698870846&width=659&height=768&srs=EPSG:28992&format=application/openlayers';

// // ADD a WMS layer
// const geoserverWMSLaag = L.tileLayer.wms('http://localhost:8080/geoserver/ows', {
//         'layers': 'Aeres:Spoorvakken',
//         'srs': 'EPSG:28992',
//         'format': 'image/png',
//         'transparent': true
//     }).addTo(mapLeaflet);


const arrayVanPlaatsnamen = ['Haarlem','Overveen','Noord-Holland','Bloemendaal'];

for (let index = 0; index <arrayVanPlaatsnamen.length; index++) {
	const woonplaats = arrayVanPlaatsnamen[index];
	

	const node = document.createElement("button");
	node.className = "button";
	node.id = woonplaats ; 
	const textnode = document.createTextNode(woonplaats);
	node.appendChild(textnode);

	document.getElementById("mapLeaflet").appendChild(node);

	node.addEventListener('click',function(){
		console.log(node.id)

	fetch('https://geodata.nationaalgeoregister.nl/locatieserver/free?bq=type:woonplaats&q'+node.id)
	.then(response => response.json())
	.then(data =>{
		console.log(data.response.docs[0].id)



//data ophalen
fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?fl=*&id=' + id) 
.then(response => response.json())
.then(data =>{ 
	const wkt = data.response.docs[0].geometrie_ll;
// WKT omzetten naar Geojson
const geojson = Terraformer.wktToGeoJSON(wkt);
console.log(geojson);
geoJsonLayer.addData(geojson);


})
		})
	})	
};