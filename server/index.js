require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))