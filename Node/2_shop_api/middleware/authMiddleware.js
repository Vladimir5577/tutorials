const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	if (req.method === 'OPTIONS') {
		next();
	}

	try {
		const token = req.headers.authorization.split(' ')[1]; // Bearer asfasdfaff
		if (!token) {
			return res.status(401).json({message: 'Not authorized'});
		}
		const decode = jwt.verify(token, process.env.SECRET_KEY);
		req.user = decode;
		next();
	} catch (e) {
		res.status(401).json({message: 'Not authorized'});
	}
};