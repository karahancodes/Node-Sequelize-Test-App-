const { Sequelize } = require ('sequelize');

const sequelize  = new Sequelize('test-db','user','pass',{
    dialect:'sqlite',
    host:'dev.sqlite' // only for test environment , for development environment you would like to keep data after each restart , have a file like ./dev.sqlite',
});

module.exports = sequelize;
