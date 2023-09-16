
const apiKey = "dcc4778f112b262033194cdb09131b45";
const getLatLonUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5"
const getWeatherBasedOnLatLonUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&"

let weatherrespinjson ;

async function checkWeather(){
   let latitude,longitude;
   const response = await fetch (getLatLonUrl + `&appid=${apiKey}`);
   const respinjson = await response.json();
   latitude = respinjson[0].lat;
   longitude = respinjson[0].lon;
   const weatherresponse = await fetch (getWeatherBasedOnLatLonUrl+`lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
    weatherrespinjson = await weatherresponse.json();
}

checkWeather().then(()=>{
    console.log(weatherrespinjson);
    document.querySelector(".temp").innerHTML = weatherrespinjson.main.temp + " °c" ;
    // document.querySelector(".city").innerHTML = weatherrespinjson.main.temp ;
    document.querySelector(".humidity-percentage").innerHTML = weatherrespinjson.main.humidity + " %" ;
    document.querySelector(".wind-speed").innerHTML = weatherrespinjson.wind.speed + " m/s";
    

});
console.log('hello');

