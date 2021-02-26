const bodyParser = require('body-parser');
const express = require('express');
const contactsRoute = require('./routes/contacts');

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/server/views/pages');

app.use('/', express.static('./src/server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home page!');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.use('/contacts', contactsRoute);

module.exports = app;
