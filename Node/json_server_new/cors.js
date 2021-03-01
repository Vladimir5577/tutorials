module.exports = (req, res, next) => {
	res.header('Access-Control-Expose-Headers', '*');
	res.header('Access-Control-Allow-Origin', '*');
	next();
}