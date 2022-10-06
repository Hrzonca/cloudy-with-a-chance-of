var apiKey = "6626d5ad59e31e91beeeb7b3404a2cab";
var city = document.querySelector("databox");
var fetchButton = document.querySelector('.searchbutton');
var weatherData = document.querySelector("ul")
const newName = document.querySelector(".userinput");
const cityName = document.querySelector(".cityName");
const previousCity = document.querySelector('.towns');
//  var today = moment();
//  $(".weatherData").text(today.format("dddd"));

function showWeather() {
    cityName.innerHTML = newName.value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newName.value + "&appid=" + apiKey + '&units=imperial';

    console.log(newName.value);
    console.log(cityName.value);

    let searchCity = newName.value;

    fetch(queryURL)
        .then(response => {
            console.log("pulling data")
            return response.json();
        })

        .then(data => {
            console.log('fetch response');

            for (var i = 0; i < 5; i++) {
                document.getElementsByClassName("fiveTemp")[i].innerHTML = "Temp: " + (data.main.temp - 286.43).toFixed(1) + "°F";
            }

            for (var i = 0; i < 5; i++) {
                document.getElementsByClassName("fiveHumidity")[i].innerHTML = "Humidity: " + (data.main.humidity - 64).toFixed(1) + "%";
                // console.log(data);
            }

            for (var i = 0; i < 5; i++) {
                document.getElementsByClassName("fiveWind")[i].innerHTML = "Wind: " + (data.wind.speed - 3.09).toFixed(1) + "MPH";
                //    console.log(data);
            }

            console.log(data)

            saveRecentSeaches(searchCity);

            document.getElementsByClassName("temp")[0].innerHTML = "Temp: " + data.main.temp + "°F";
            document.getElementsByClassName("humidity")[0].innerHTML = "Humidity: " + data.main.humidity + "%";
            document.getElementsByClassName("wind")[0].innerHTML = "Wind: " + data.wind.speed + "MPH";
            document.getElementsByClassName("displayicons")[0].innerHTML = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })

}

fetchButton.addEventListener("click", showWeather);


const getForcast = async (city) => {
    const urlToFEtch = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
    try {
        const response = await fetch(urlToFEtch)
        if (response.ok) {
            const forcastJsonResponse = await response.json();
            // console.log('==============below are forcast data======')
            // console.log(forcastJsonResponse);
            const list = forcastJsonResponse.list;
            // console.log(list);
            return list;
        }
    } catch (err) {
        console.log(err)
    }
}

const displayForcast = (list) => {
    for (var i = 0; i < 5; i++) {
        $(`#img${i + 1}`).attr({
            src: `http://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png`,
            alt: 'weather icon'
        })
    }
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName("fiveTemp")[i].innerHTML = "Temp: " + list[i].main.temp + "°F";

    }

    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName("fiveHumidity")[i].innerHTML = "Humidity: " + list[i].main.humidity + "%";

    }

    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName("fiveWind")[i].innerHTML = "Wind: " + list[i].wind.speed + "MPH";

    }

}

const searchForcast = async () => {
    const list = await getForcast(city);
    displayForcast(list)
}

$(".searchbutton").on('click', (event) => {
    event.preventDefault();
    city = $('.userinput').val();
    searchForcast()
})

// save, , pulling data
let previousSearches = [];
console.log(previousSearches);

function saveRecentSeaches(searchCity) {
    if (previousSearches.length > 4) {
        previousSearches.shift();
    }


    previousSearches.push(searchCity);
    console.log(previousSearches);
    populateHistory();
}

function populateHistory() {
    previousCity.innerText = '';
    for (var i = 0; i < previousSearches.length; i++) {
        console.log(previousSearches[i]);
        let cityEl = document.createElement('li');
        cityEl.innerText = previousSearches[i];
        previousCity.append(cityEl);
    }
}





//weather icons link from openweather http://openweathermap.org/img/wn/


//https://www.youtube.com/watch?v=QEu8_5bYm-w really helped




//future work: creating html elements in javascript so i dont have to repeat in html
// function weatherTable() {
//     console.log("days showing");
//     var rowDiv = $("<div>");
//     var userInput = $("<input>");
//     var icons = $("<div>");
//     var weatherDisplay = $("<p>");
//     var button = $("<button>");

//     rowDiv.addclass("weatherData");
//     userInput.addclass("text");
//     icons.addclass("iconDisplay");
//     weatherDisplay.addclass("temp");
//     button.addclass("fetchData");
//     rowDiv.append(icons, text, weatherDisplay, button);
//     $("weathercon").append(rowDiv);
// }


// fetch(queryURL)
// .then(response => response.json())
// .then(data => {
//     for (i=0;i<5;i++) {
//         document.getElementById("day" + (i+1)+ "Min").innerHTML = "Min:" + Number(data.main.temp_min -284.74).tofixed(1)+ "°";
//     }
//     for (i=0;i<5;i++) {
//         document.getElementById("day" + (i+1)+ "max").innerHTML = "max:" + number(data.list[i].main.temp_max -288.53).tofixed(1)+ "°";
//     }
// })

//https://calendly.com/fsf-tutor-team/savien-love
//https://calendly.com/fsf-tutor-team/tutor-session