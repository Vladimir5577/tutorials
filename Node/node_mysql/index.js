const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');
const PeopleRoutes = require('./components/people');

var app = express();
app.use(bodyParser.json());

app.use('/peoples', PeopleRoutes);



app.listen(3000);