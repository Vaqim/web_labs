const bodyParser = require('body-parser');
const express = require('express');
const contactsRoute = require('./routes/contacts');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello from home page!' });
});

app.use('/contacts', contactsRoute);

module.exports = app;
