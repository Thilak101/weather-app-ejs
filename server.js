const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const weatherRouter = require("./routes/weather")

const PORT = process.env.PORT || 4000

dotenv.config()

const app = express()
app.use(express.static(__dirname + '/public'))
app.set("view engine", 'ejs')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', weatherRouter)



app.listen(PORT, () => console.log(`server was started`))