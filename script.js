document.addEventListener("DOMContentLoaded",() =>{
    const cityInput = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("get-weather-btn")
    
    getWeatherBtn.addEventListener("click", async()=>{
        const city = cityInput.value.trim()
        console.log(city)

        const API_KEY ="1296aa9ff98a036e7344238ee3aeacdf"
        async function fetchWeatherData(city) {
            const url  =`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}`
            const reponse = await fetch(url)
            if (!reponse.ok){
                throw new Error("City not found")
            }
            const data = reponse.json()
            return data
        }
    })
})