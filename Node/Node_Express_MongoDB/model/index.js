const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/node_crud',  { 
		useNewUrlParser: true,
		useUnifiedTopology: true 
	} , 
	(error) => {
	if (!error) {
		console.log('Connedted to mongoose successfylly');
	} else {
		console.log('Connection to the database failed');
	}
});

const Course = require('./course.model');