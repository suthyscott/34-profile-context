require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Profile} = require('./models/profile')

const app = express()

app.use(express.json())
app.use(cors())

sequelize.sync()
    .then(res => {
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))
