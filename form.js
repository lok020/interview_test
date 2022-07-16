const { Model, DataTypes } = require('sequelize');
const sequelize = require('./connect_database');

class form extends Model {}

form.init({
    firstName: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.NUMBER },
    gender: { type: DataTypes.STRING },
    year: { type: DataTypes.NUMBER },
    month: { type: DataTypes.NUMBER },
    day: { type: DataTypes.NUMBER },
    comments: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: "Forms"
})

module.exports = form;