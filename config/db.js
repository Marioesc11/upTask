const Sequelize = require('sequelize');

const db = new Sequelize('upTask','postgres','mario', {
    host: 'localhost',
    dialect: 'postgres',  //'mysql'
    define:{
        timestamps:false
    }
  });

  module.exports = db;