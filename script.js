const apiKey= "9559e5ad07f244f3815110547240701"
const apiUrl= "https://api.weatherapi.com/v1/current.json?key=9559e5ad07f244f3815110547240701&q="

const searchBox= document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")

async function chkWeather(city){
    const response= await fetch(apiUrl + city + '&appid=${apiKey}')
    var data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML= data.location.name
    document.querySelector(".temp").innerHTML= data.current.temp_c + "°c"
    document.querySelector(".humidity").innerHTML= data.current.humidity + "%"
    document.querySelector(".wind").innerHTML= data.current.wind_kph + "km/h"
    document.getElementById("image").src= data.current.condition.icon
   
    // document.getElementById("image").src= data.current.condition.icon
}

searchBtn.addEventListener("click", ()=>{
    chkWeather(searchBox.value)
})

// Sunny  Clear
// Partly Cloudy
// Cloudy
// Overcast
// Mist
// Patchy rain nearby
// Patchy snow nearby
// Patchy sleet nearby
// Patchy freezing drizzle nearby
// Thundery outbreaks in nearby
// Blowing snow
// Blizzard
// Fog
// Freezing Fog
// Patchy light drizzle
// Light drizzle
// Freezing drizzle
// Heavy freezing drizzle
// Patchy light rain
// Light rain
// Moderate rain at times
// Moderate rain
// Heavy rain at times
// Heavy rain
// Light freezing rain
// Moderate or heavy freezing rain
// Light sleet
// Moderate or heavy sleet
// Patchy light snow
// Light snow
// Patchy moderate snow
// Moderate snow
// Patchy heavy snow

