const { Router } = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/', async (req, res) => {
	const todos = await Todo.find({});

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
		completed: false
	});

	await todo.save();

	res.redirect('/');
});

// delete
router.get('/delete/:id', async (req, res) => {
	// console.log(req.body.id);
	const todo = await Todo.findById(req.params.id);
	// console.log(todo);

	await todo.delete();

	res.redirect('/');
});

// edit
router.get('/edit/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);
	res.render('edit', {
		todo: todo.toJson()
	});
});

// update
router.post('/update', async (req, res) => {
	// console.log(req.body.id);
	const todo = await Todo.findByIdAndUpdate({ _id: req.body.id }, { title: req.body.title });

	res.redirect('/');
});

router.post('/complete', async (req, res) => {
	const todo = await Todo.findById(req.body.id);

	todo.completed = !!req.body.completed; // !! - convert to boolean
	await todo.save();
	res.redirect('/');
});

module.exports = router;