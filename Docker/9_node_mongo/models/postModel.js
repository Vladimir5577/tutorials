const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		require: [true, 'Title required'],
	},
	body: {
		type: String,
		required: [true, 'Body required'],
	},
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;