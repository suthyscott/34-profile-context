require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Profile} = require('./models/profile')
const {register, login} = require('./controller/authCtrl')
const {getProfile} = require('./controller/profileCtrl')

const app = express()

app.use(express.json())
app.use(cors())

User.hasOne(Profile)
Profile.belongsTo(User)

app.post('/api/register',  register)
app.post('/api/login', login)

app.get('/api/profile', getProfile)


sequelize.sync()
// sequelize.sync({force: true})
    .then(res => {
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))
