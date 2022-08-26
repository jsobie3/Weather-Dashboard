var useAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}`
var myAPIkey = `6bf91d1a95eef01934c750168d876000`
var city = document.querySelector(`#searchBar`)
var citySearch = document.querySelector(`#searchBtn`)
var name = document.querySelector(`.name`)
function currentTime(){
    let currentDay = dayjs().format(`MMM DD, YYYY:   h:mm a`);
    $(`#currentDay`).text(currentDay);
  }
console.log(localStorage)
function getCoords(search) {
    var fiveDayForeCast = `https://api.openweathermap.org/data/2.5/weather?q=` + search + `&units=imperial&appid=` + myAPIkey
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
}
citySearch.addEventListener(`click`, realGetCoords)
function weatherDetails(data){
    const name = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    console.log(name,temp,humidity,windSpeed)
    function displayDetails(){
        // document.querySelector("#city").textContent = "" + name + " ( " + currentDay +" ) ";
        document.getElementById(`name`).innerText = "City " + name;
        document.getElementById(`temp`).innerText = "Temp: " +temp;
        document.getElementById(`humidity`).innerText = "Humidity: " +humidity;
       
    }
    displayDetails()
}
var forcastAPI = `api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=` + myAPIkey
function weatherFiveDay (data){
    // empty out any previous entries
    $('.fiveday-forecast-container').empty()
    // loop over the data and call our display five day function
    for (let i = 0; i < 5; i++) {
        displayFiveDay(data.daily[i])
    }
}

function displayFiveDay(data) {
    // get your data similar to your lines 30-33
    // Below is a template literal - this will help display our data into your 5 day forecast
    // create cards for each of the 5-day forcast weather
    const card = `<div class="column col s12 m6 l2">
    <div class= "card">
        <div>
            <ul class="list-group list-group-flush">
                <h5 class="list-group-item date">${date}</h5>
                <img class="list-group-item weather-icon" src="http://openweathermap.org/img/wn/${look}@2x.png" alt="">
                <li class="list-group-item temp">Temp: ${temp}&#8457</li>
                <li class="list-group-item wind">Wind: ${wind} MPH</li>
                <li class="list-group-item humidity">Humidity: ${humidity}%</li>
            </ul>
        </div>  
    </div>
    </div>`;
    $('.fiveday-forecast-container').append(card)
  }