const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {

	// get data for login user
	// res.json({
	// 	posts: {
	// 		title: 'My first post',
	// 		description: 'This data you shouldnt access'
	// 	}
	// });

	// get user id on token
	res.send(req.user);
	User.findByOne({ _id: req.user });
});

module.exports = router;