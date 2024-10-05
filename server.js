const express = require('express');
const handlebars = require('handlebars');
const handlebars_mod = require('express-handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

const appRoutes = require('./routes/approutes');

app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());

app.engine(
  'handlebars',
  handlebars_mod.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);

app.set('view engine', 'handlebars');
app.use(appRoutes);
app.listen(3000, () => {
  console.log('Server running at 3000');
});