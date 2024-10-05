const Sequelize = require("sequelize");
sequelize = new Sequelize('banconode','root','mysqluser',
{
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}