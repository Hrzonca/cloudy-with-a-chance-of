var apiKey = "33adff521a186dea6eea773c8456a07b";
var city = document.querySelector("databox");
var fetchButton = document.querySelector('.searchbutton');
var weatherData = document.querySelector("ul")
const newName = document.querySelector(".userinput");
const cityName = document.querySelector(".cityName");




//connect _weatherTable instead of repeating html 
function showWeather() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newName.value + "&appid=" + apiKey;
    cityName.innerHTML = "--" + newName.value + "--";

    fetch(queryURL)
        .then(response => {
            console.log("pulling data")
            return response.json();
        })
        .then(data => {
            console.log('fetch response');
            for (var i = 0; i = data.length; i++) {
                console.log(data);
            }

        })

}
fetchButton.addEventListener("click", showWeather);


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
//         document.getElementById("day" + (i+1)+ "min").innerHTML = "min:" + number(data.list[i].main.temp_min -288.53).tofixed(1)+ "°";
//     }
//     for (i=0;i<5;i++) {
//         document.getElementById("day" + (i+1)+ "max").innerHTML = "max:" + number(data.list[i].main.temp_max -288.53).tofixed(1)+ "°";
//     }
// })