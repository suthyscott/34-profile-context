const {sequelize} = require('../util/database')
const {DataTypes} = require('sequelize')

module.exports = {
    Profile: sequelize.define('profile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        favColor: DataTypes.STRING
    })
}