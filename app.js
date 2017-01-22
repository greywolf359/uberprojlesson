const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');

//this does not appear in the console at all
console.log('process', process.env.NODE_ENV);

mongoose.Promise = global.Promise;

//ive had to comment out mongoose.connect here so it does not throw an
//error
if(process.env.NODE_ENV !== 'test'){

	//mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json());
routes(app);

module.exports = app;