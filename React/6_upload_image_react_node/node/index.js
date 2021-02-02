const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const Post = require('./Models/Post');
const cors = require('cors');

const  app = express();

app.use(fileUpload());
app.use(cors());
// text route
app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

// get posts
app.get('/get_posts', async (req, res) => {
	const posts = await Post.find({});
	res.send(posts);
});

// post 
app.post('/upload', async (req, res) => {
	// console.log(req.body.title);
	if (req.files === null) {
		return res.status(400).json({ msg: 'No file uploaded' });
	}

	const file = req.files.file;
	file.mv(`${__dirname}/../react_app/public/uploads/${file.name}`, err => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
	});

	const post = new Post({
		title: req.body.title,
		image: req.files.file.name
	});

	await post.save();
	res.json({ message: 'Post created succssfully' });
});

// delete post
app.get('/delete/:id', async (req, res) => {
	console.log(req.params.id);
	const post = await Post.findById(req.params.id);
	await post.delete();
	res.json({ message: 'Post was deleted successfully' });
});

// edit post
app.get('/edit/:id', async (req, res) => {
	console.log(req.params.id);
	const post = await Post.findById(req.params.id);
	res.send(post);
});

// update post
app.patch('/update/:id', async (req, res) => {

	if (req.files !== null) {
		const file = req.files.file;
		file.mv(`${__dirname}/../react_app/public/uploads/${file.name}`, err => {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}
		});

		const post = await Post.findByIdAndUpdate({ _id: req.params.id }, { title: req.body.title, image: req.files.file.name });

		res.json({ message: 'Post updated succssfully' });
		console.log('Updated image');
	} else {

		console.log(req.params.id);
		const post = await Post.findByIdAndUpdate({ _id: req.params.id }, { title: req.body.title });

		res.json({ message: 'Post updated succssfully' });
		console.log('Updated only text');
	}
});

// mongoose connection
mongoose.connect('mongodb+srv://user:1a2b@cluster0.fzbrx.mongodb.net/posts', {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});


app.listen(5000, () => console.log('Server running on the port 5000'));