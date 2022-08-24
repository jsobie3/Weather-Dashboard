console.log('hello');
// var searchBtn = document.querySelector('searchBtn')
var useAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"
var myAPIkey = "6bf91d1a95eef01934c750168d876000"

var city = document.querySelector('#searchBar')
var citySearch = document.querySelector('#searchBtn')




console.log(localStorage)

function getCoords(search) {

    var fiveDayForeCast = 'https://api.openweathermap.org/data/2.5/weather?q=' + search + '&appid=' + myAPIkey

    fetch(fiveDayForeCast).then(function (response) {
        if (response.ok) {
            //   saveCity(cityName);
            response.json().then(function (data) {
                console.log(data);
            });
        }
    });
}


function realGetCoords(event) {
    event.preventDefault()
    var search = city.value.trim()
    getCoords(search)
}

citySearch.addEventListener('click', realGetCoords)