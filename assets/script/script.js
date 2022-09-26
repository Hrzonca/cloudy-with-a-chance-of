var apiKey = "6626d5ad59e31e91beeeb7b3404a2cab";
var city = document.querySelector("databox");
var fetchButton = document.querySelector('.searchbutton');
var weatherData = document.querySelector("ul")
const newName = document.querySelector(".userinput");
const cityName = document.querySelector(".cityName");
// var today = moment();
// $(".weatherData").text(today.format("dddd"));

//connect _weatherTable instead of repeating html 
function showWeather() {
    cityName.innerHTML = newName.value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newName.value + "&appid=" + apiKey;

    console.log(newName.value);
    console.log(cityName.value);

    fetch(queryURL)
        .then(response => {
            console.log("pulling data")
            return response.json();
        })
        .then(data => {
            console.log('fetch response');
            for (var i = 0; i < 5; i++) {
                document.getElementsByClassName("temp" + (i + 1) + "temp").innerHTML = "Temp:" + Number(data.main.temp - 286.43) + "°F";
                console.log(data);
            }

            var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + newName.value + "&appid=" + apiKey;
            
            fetch(fiveDay)
            .then(response => {
                console.log("pulling data")
                return response.json();
            })
       
        })
        //data.weather.icon inside this function 
    
}

//moment for the 5 day forcast 
//add function for localstrage to save the previous entries. 
//if else statments inside the fetch qu URl
fetchButton.addEventListener("click", showWeather);



//weather icons link from openweather http://openweathermap.org/img/wn/

//once the data is pulled it should appear in these rows 

//https://www.youtube.com/watch?v=QEu8_5bYm-w really helped

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