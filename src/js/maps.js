let map;
let marker;
let infoWindow;

function initMap() {
    // Custom style for the map with the color #303031
    const mapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                { "color": "#303031" }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                { "color": "#303031" }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#ffffff" }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                { "color": "#ffffff" }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                { "color": "#404040" }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                { "color": "#000000" }
            ]
        },
    ];

    // Initialize the map centered on Uluru, Australia with custom style
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -25.363, lng: 131.044 },
        zoom: 4,
        styles: mapStyle, // Apply the custom style
    });

    // Initialize the marker at the same location
    marker = new google.maps.Marker({
        position: { lat: -25.363, lng: 131.044 },
        map: map,
        title: "Uluru",
        clickable: true,
    });

    // Initialize the info window with content
    infoWindow = new google.maps.InfoWindow({
        content: `<h1>Uluru</h1>
                  <p><b>Uluru</b>, also known as <b>Ayers Rock</b>, 
                  is a large sandstone rock formation in central Australia.</p>`,
    });

    // Add a click event to the marker to open the info window
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

function searchCity() {
    const city = document.getElementById('cityInput').value;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: city }, function(results, status) {
        if (status === 'OK') {
            const location = results[0].geometry.location;
            map.setCenter(location);
            map.setZoom(10);
            marker.setPosition(location);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

window.initMap = initMap;