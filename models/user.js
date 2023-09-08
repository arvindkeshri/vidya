const Sequelize = require('sequelize');
const sequelize = require('../util/sequelize');

const Student =sequelize.define('users', {
    name: {type: Sequelize.STRING},
    email:{type: Sequelize.STRING},
    number: {type: Sequelize.NUMBER}
    }, 
    { timestamps: false} //disables createdat and updatedat
)

module.exports = Student;
