const { sequelize, Sequelize } = require('../config/database');
const empregadosModel = require("../models/empregados")(sequelize,Sequelize);

exports.showAll = (req, res) => {
    empregadosModel.findAll(
    ).then(results=> {
        console.log(results);
        res.render('showAllView',{ layout:false, results_form:results })
    }).catch(err => {
        res.status(500).send({message: "Error" + err.message})
    })
}