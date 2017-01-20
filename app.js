const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;


if(process.env.NODE_ENV !== 'test'){
	console.log('the if is firing');
	mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json());
routes(app);

module.exports = app;