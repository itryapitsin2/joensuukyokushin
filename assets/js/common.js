function toggleBackground() {
    var body = document.getElementsByTagName("body")[0];
    var hasClass = body.classList.contains("inverted-colors");
    if (hasClass) {
        body.classList.remove("inverted-colors");
    } else {
        body.classList.add("inverted-colors");
    }

}

var OneSignal = window.OneSignal || [];
OneSignal.push(function () {
    OneSignal.init({
        appId: "ccc9dfda-32e7-4856-9b6a-e14865466f59",
    });
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [62.602448, 29.7524578],
        zoom: 16,
        controls: ['zoomControl']
    });

    var myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [62.602448, 29.7524578]
        },
    });

    myMap.geoObjects.add(myGeoObject);
}
