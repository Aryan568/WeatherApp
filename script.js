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


}

searchBtn.addEventListener("click", ()=>{
    chkWeather(searchBox.value)
})