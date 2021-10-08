const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

	try {
		const token = req.headers.authorization.split(' ')[1]; // Bearer 
		if (!token) {
			return res.status(401).json({ message: 'Unauthorize. Please provide a token.' });
		}
		const decoded = jwt.verify(token, 'secret');
		req.user = decoded;
		next();
	} catch (e) {
		res.status(401).json({message: 'Unauthorize.'});
	}

};