const {Sequelize} = require('sequelize');

module.exports = {
  getConnection() {
    try {
      return new Sequelize('api_project', 'root', 'secret', {
        host: 'localhost',
        port: 3306,
        dialect: 'mariadb'
      });
    } catch (error) {
      throw "Unable to connect to the database: " + error;
    }
  }
};