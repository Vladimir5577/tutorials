const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model('Course');

router.get('/add', (req, res) => {
	res.render('add_course');
});

router.post('/add', (req, res) => {
	console.log(req.body.courseFees);
	
	var course = new CourseModel();
	course.courseName = req.body.courseName;
	course.courseDuration = req.body.courseDuration;
	course.courseFees = req.body.courseFees;
	course.courseId = Math.ceil(Math.random() * 1000000);
	course.save((err, doc) => {
		if (!err) {
			res.redirect('/course/list');
		} else {
			res.send('Something wrong');
		}
	});
	res.render('add_course');
	
});


router.get('/list', (req, res) => {

	// console.log(CourseModel.find());
	/*
	var course = new CourseModel();
	course.courseName = 'Mongo db';
	course.courseId = '234';
	course.save();
	*/
	const foo = 'Data from course controller';
	
	CourseModel.find((err, docs) => {
		if (!err) {
			console.log('docs', docs);
			res.render('list', { data : docs, bla : foo });
		} else {
			res.send('Error');
		}
	});
});

module.exports = router;