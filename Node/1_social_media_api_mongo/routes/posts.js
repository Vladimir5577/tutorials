const router = require('express').Router();
const Post = require('../models/Post');
const User = require("../models/User");


// create a post
router.post('/', async (req, res) => {
	const newPost = new Post(req.body);
	const savePost = await newPost.save();
	res.status(200).json(savePost);
});

// update a post
router.put('/:id', async (req, res) => {
	const post = await Post.findById(req.params.id);
	if (post.userId === req.body.userId) {
		await post.updateOne({$set: req.body});
		res.status(200).json('The post has been updated');		
	} else {
		res.status(403).json('You can update only your post');
	}
});

// delete
router.delete('/:id', async (req, res) => {
	const post = await Post.findById(req.params.id);
	if (post.userId === req.body.userId) {
		await post.deleteOne();
		res.status(200).json('The post has been deleted');		
	} else {
		res.status(403).json('You can delete only your post');
	}
});

// like - dislike a post
router.put('/:id/like', async (req, res) => {
	const post = await Post.findById(req.params.id);
	if (!post.likes.includes(req.body.userId)) {
		res.status(200).json('The post has been liked');
	} else {
		await post.updateOne({ $pull: {likes: req.body.userId} });
		res.status(200).json('The post has been disliked');
	}
});

// get a post
router.get('/:id', async (req, res) => {
	const post = await Post.findById(req.params.id);
	res.status(200).json(post);
});

// get timeline posts
router.get('/timeline/all', async (req, res) => {
	const currentUser = await User.findById(req.body.userId);

    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
    
});

module.exports = router;