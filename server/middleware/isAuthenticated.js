require("dotenv").config()
const {SECRET} = process.env
const jwt = require('jsonwebtoken')

module.exports = {
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get('Authorization')

        if(!headerToken){
            res.sendStatus(401)
        }

        let token

        try {
            token = jwt.verify(headerToken, SECRET)
        } catch(err){
            console.log(err)
            err.statusCode = 500
            throw err
        }

        if(!token){
            const error = new Error('Not authenticated')
            error.statusCode = 401
            throw error
        }

        next()
    }
}