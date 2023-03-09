require('dotenv').config()
const {SECRET} = process.env
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User} = require('../models/user')

const createToken = (username,id) => {
    return jwt.sign({username, id}, SECRET, {expiresIn: '2 days'})
}

module.exports = {
    register: async (req, res) => {
        console.log('hit register')
        try{
            const {username, password} = req.body
            console.log(username)
            let foundUser = await User.findOne({where: {username}})
            if(foundUser){
                res.status(400).send('That username is already taken')
            } else {
                const salt = bcrypt.genSaltSync(5)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })
                const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    username: newUser.dataValues.username,
                    userId: newUser.dataValues.id,
                    token,
                    exp
                })
            }

        } catch(err) {
            console.log(err)
            res.status(400).send('Something broke')
        }
    },
    login: async (req, res) => {
        console.log('hit login')
        try{
            const {username, password} = req.body
            const foundUser = await User.findOne({where: {username}})

            if(foundUser){
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

                if(isAuthenticated){
                    const token = createToken(foundUser.dataValues.username, foundUser.dataValues.id)
                    const exp = Date.now() + 1000 * 60 * 60 * 48

                    res.status(200).send({
                        username: foundUser.dataValues.username,
                        userId: foundUser.dataValues.id,
                        token,
                        exp
                    })
                } else {
                    res.status(400).send('That password is incorrect')
                }
            } else {
                res.status(400).send('There is no user with that username.')
            }

        } catch(err){
            console.log(err)
            res.status(400).send('Something went wrong in login.')
        }
    }
}