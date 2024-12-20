// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial
// -----> https://openweathermap.org/current

let API_KEY="1f7f4530ec7c89af79030cc5e07ad7bc";

function getWeatherData(city){
    const URL="https://api.openweathermap.org/data/2.5/weather";

    const Full_Url=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    const weatherPromise=fetch(Full_Url)
    console.log(city);
    

    return weatherPromise.then((response) => {
        return response.json()
    })
}

function searchCity(){
    const city=document.getElementById("city-input").value
    getWeatherData(city)
    .then((response)=>{
        console.log(response);
        
        showWeatherData(response)
    })
    .catch((erro)=>{
        console.log(erro)
        
    })
}

showWeatherData=(weatherData)=>{
    document.getElementById("city-name").innerText=weatherData.name;
    document.getElementById("WeatherType").innerText=weatherData.weather[0].main;
    document.getElementById("temp").innerText=weatherData.main.temp;
    document.getElementById("min-temp").innerText=weatherData.main.temp_min;
    document.getElementById("max-temp").innerText=weatherData.main.temp_max;
}