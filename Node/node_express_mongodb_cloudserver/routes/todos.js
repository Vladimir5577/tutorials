const { Router } = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/', async (req, res) => {
	const todos = await Todo.find({});
	console.log(todos[0].toJson());

	res.render('index', {
		title: 'Todos list',
		isIndex: true,
		todos: todos.map(item => item.toJson())
	});
});

router.get('/create', (req, res) => {
	res.render('create', {
		title: 'Create todo'
	});
});

router.post('/create', async (req, res) => {
	// console.log('res.body.title');

	const todo = new Todo({
		title: req.body.title,
		completed: true
	});

	await todo.save();

	res.redirect('/');
});

router.post('/complete', async (req, res) => {
	const todo = await Todo.findById(req.body.id);

	todo.completed = !!req.body.completed; // !! - convert to boolean
	await todo.save();
	res.redirect('/');
});

module.exports = router;