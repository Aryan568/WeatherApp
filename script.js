const apiKey= "9559e5ad07f244f3815110547240701"
const apiUrl= "https://api.weatherapi.com/v1/current.json?key=9559e5ad07f244f3815110547240701&q=Indore"

async function chkWeather(){
    const response= await fetch(apiUrl + '&appid=${apiKey}')
    
}