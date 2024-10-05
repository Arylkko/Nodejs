const Sequelize = require('sequelize');
sequelize = new Sequelize('banconode', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  Sequelize,
  sequelize,
};