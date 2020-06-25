const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "c918354ffea3717e557fe67919df6f21";

function getWeather(lat, long) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function (res) {
        return res.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;

        weather.innerText = `${temperature}℃ @ ${place}`;
    });
}

function saveCoords(coordsObject) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObject = {
        latitude,
        longitude
    };
    saveCoords(coordsObject);
    getWeather(latitude, longitude);
}

function handleGeoFail() {
    console.log("Unavailable to access geo loaction");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoFail);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();