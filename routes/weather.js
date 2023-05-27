const router = require('express').Router()
const axios = require('axios')


router.get('/', (req, res) => {
    res.render('home')


})



router.post('/', async (req, res) => {
    const city = req.body.city
    try {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`)
        // const data = await response.json()
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`)
        const data = await response.data
        res.render('weather', {
            weatherDescription: data.weather[0].description,
            temp: data.main.temp,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max,
            windSpeed: data.wind.speed,
            humidity: data.main.humidity,
            city: city
        })
    } catch (err) {
        res.json({ msg: err.message })
    }
})

module.exports = router