document.addEventListener("DOMContentLoaded",() =>{
    const cityInput = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("get-weather-btn")

    getWeatherBtn.addEventListener("click", ()=>{
        const city = cityInput.value.trim()
        console.log(city)
    })
})