const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class form extends Model {}

form.init({
    firstName: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    year: { type: DataTypes.STRING },
    month: { type: DataTypes.STRING },
    day: { type: DataTypes.STRING },
    comments: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: "form_data"
})

module.exports = form;