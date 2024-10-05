const express = require('express');
const handlebars = require('handlebars');
const handlebars_mod = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const rotas= require('./routes/routes');

app = express();

app.use(express.urlencoded({extend:false}));
app.use (express.json());

app.engine('handlebars',handlebars_mod.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars)
})
);

app.set('view engine','handlebars');
app.use(rotas);
app.listen(3000, ()=>{
    console.log("Server rodando no 3000!!!!")
})