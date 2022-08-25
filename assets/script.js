console.log('hello');
// var searchBtn = document.querySelector('searchBtn')
var useAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"
var myAPIkey = "6bf91d1a95eef01934c750168d876000"

var city = document.querySelector('#searchBar')
var citySearch = document.querySelector('#searchBtn')

var name = document.querySelector('.name')


function currentTime(){
    let currentDay = dayjs().format('MMM DD, YYYY:   h:mm a');
    $('#currentDay').text(currentDay);
  }


console.log(localStorage)
function getCoords(search) {
    var fiveDayForeCast = 'https://api.openweathermap.org/data/2.5/weather?q=' + search + '&units=imperial&appid=' + myAPIkey


    fetch(fiveDayForeCast).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            console.log(data);
            weatherDetails(data)
            weatherFiveDay(data)
            });
        }
    });
}

function realGetCoords(event) {
    event.preventDefault()
    var search = city.value.trim()
    getCoords(search)
    weatherDetails()
    weatherFiveDay()
}

citySearch.addEventListener('click', realGetCoords)

function weatherDetails(data){
    const name = data.name;
    const temp = data.main.temp; 
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    console.log(name,temp,humidity,windSpeed)

    function displayDetails(){
        document.getElementById('name').innerText =name;
        document.getElementById('temp').innerText = temp;
        document.getElementById('humidity').innerText = humidity;
    }
    displayDetails()
}

var forcastAPI = 'api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=' + myAPIkey 

function weatherFiveDay (data){
    
    const name = data.name;

    const tempDay1 = data.main.temp; 
    const tempDay2 = data.main.temp; 
    const tempDay3 = data.main.temp; 
    const tempDay4 = data.main.temp; 
    const tempDay5 = data.main.temp; 

    const windSpeedDay1 = data.wind.speed;
    const windSpeedDay2 = data.wind.speed;
    const windSpeedDay3 = data.wind.speed;
    const windSpeedDay4 = data.wind.speed;
    const windSpeedDay5 = data.wind.speed;


    const humidityDay1 = data.main.humidity;
    const humidityDay2 = data.main.humidity;
    const humidityDay3 = data.main.humidity;
    const humidityDay4 = data.main.humidity;
    const humidityDay5 = data.main.humidity;

    function displayFiveDay(){

        document.getElementById('nameFive').innerText = name;
        document.getElementById('tempFive').innerText = temp; 
        document.getElementById('humidityFive').innerText = humidity;
    
    }
    displayFiveDay()
}