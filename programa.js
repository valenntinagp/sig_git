var map = L.map('map').setView([4.611134190766284, -74.15868026209317], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
  // Array de coordenadas de los 5 marcadores
  var coordinates = [
    { lat: 4.6094659077167845, lon: -74.15456038929682, label: 'Parque Timiza'},
    { lat: 4.611262520069374, lon: -74.15833693936014, label: 'Marcador 2' },
    { lat: 4.609850788436209, lon: -74.15848840636555, label: 'Marcador 3' },
    { lat: 4.616866102330535, lon: -74.15340293838254, label: 'Marcador 4' },
    { lat: 4.61930433543355, lon: -74.15745843816646, label: 'Marcador 5' }
];

// Añadir los 5 marcadores al mapa
coordinates.forEach(function(coord, index) {
    var marker = L.marker([coord.lat, coord.lon]).addTo(map);
    marker.bindPopup("<b>" + coord.label + "</b><br>Lat: " + coord.lat + "<br>Lon: " + coord.lon);
});