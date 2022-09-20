var APIkey = "33adff521a186dea6eea773c8456a07b";
var city;


api.openweathermap.org/data/2.5/weather?q={city}&appid: (APIkey)

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

fetch(queryURL)