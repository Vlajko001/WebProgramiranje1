function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(44.8141303, 20.4845617),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
