const apiKey = "dcc4778f112b262033194cdb09131b45";
const getLatLonUrl = "http://api.openweathermap.org/geo/1.0/direct?limit=5"
const getWeatherBasedOnLatLonUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&"

let weatherrespinjson;
let isCityValid;
let weatherEle = document.getElementsByClassName("weather")[0];
let validCityEle = document.getElementsByClassName("valid-city")[0];
validCityEle.style.display = "block";
weatherEle.style.display = "none";

async function checkWeather(city) {
    try {
        let latitude, longitude;
        const response = await fetch(getLatLonUrl + `&appid=${apiKey}&q=${city}`);
        const respinjson = await response.json();
        if (respinjson.length >= 1) {
            isCityValid = true;
            latitude = respinjson[0].lat;
            longitude = respinjson[0].lon;
            const weatherresponse = await fetch(getWeatherBasedOnLatLonUrl + `lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
            weatherrespinjson = await weatherresponse.json();
        } else {
            weatherEle.style.display = "none";
            validCityEle.style.display = "block";
            isCityValid = false;
        }

    } catch (error) {
        console.log('There is a error');
    }
}

document.querySelector(".search button").addEventListener("click", () => {

    const city = document.querySelector(".search input").value;
    checkWeather(city).then(() => {

        // console.log(weatherrespinjson);
        if (isCityValid) {
            document.querySelector(".temp").innerHTML = weatherrespinjson.main.temp + " °c";
            document.querySelector(".city").innerHTML = city;
            document.querySelector(".humidity-percentage").innerHTML = weatherrespinjson.main.humidity + " %";
            document.querySelector(".wind-speed").innerHTML = weatherrespinjson.wind.speed + " m/s";

            let weatherimgEle = document.querySelector(".weather .weather-icon");

            switch (weatherrespinjson.weather[0].main) {

                case 'Clouds':
                    weatherimgEle.src = "./weather-app-img/images/clouds.png";
                    break;

                case 'Clear':
                    weatherimgEle.src = "./weather-app-img/images/clear.png";
                    break;

                case 'Mist':
                    weatherimgEle.src = "./weather-app-img/images/mist.png";
                    break;

                case 'Drizzle':
                    weatherimgEle.src = "./weather-app-img/images/drizzle.png";
                    break;

                case 'Rain':
                    weatherimgEle.src = "./weather-app-img/images/rain.png";
                    break;

                case 'Snow':
                    weatherimgEle.src = "./weather-app-img/images/snow.png";
                    break;

                default:
                    weatherimgEle.src = "./weather-app-img/images/clear.png";
                    break;


            }
            weatherEle.style.display = "block";
            validCityEle.style.display = "none";

        }


    });

})


