const models = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
	return jwt.sign(
		{id, email, role}, 
		'secret',
		{expiresIn: '24h'}
	);
};

class UserController {

	async getUsers (req, res) {
		const users = await models.User.findAll({ 
			attributes: ['id', 'name', 'email', 'country'],
			include: models.Article,
		});
		return res.json(users);
	}

	async register (req, res, next) {
		const { email, password } = req.body;
		if (!email || !password) {
			return next(res.json({message: 'Email and password are required!'}));
		}

		const userExist = await models.User.findOne({ where: {email} });
		if (userExist) {
			return next(res.json({message: 'User already exists!'}));
		}

		const hashPassword = await bcrypt.hash(password, 5);
		const user = await models.User.create({email, password: hashPassword});
		const token = generateJwt(user.id, user.email, user.role);

		return res.json({token});
	}

	async login (req, res, next) {
		const { email, password } = req.body;
		if (!email || !password) {
			return next(res.json({message: 'Email and password are required!'}));
		}

		const user = await models.User.findOne({where: {email} });
		if (!user) {
			return next(res.json('User not found'));
		}

		let comparePassword = bcrypt.compareSync(password, user.password);
		if (!comparePassword) {
			return next(res.json('Wrong password'));
		}

		const token = generateJwt(user.id, user.email, user.role);
		return res.json({token});
	};

	async userInfo (req, res) {
		res.status(200).json(req.user);
	}


	async check (req, res, next) {
		const authHeader = String(req.headers['authorization'] || '');
	    if (authHeader.startsWith('Bearer ')) {
	    	const token = authHeader.substring(7, authHeader.length);
	    	// const payload = jwtDecode(token) as JwtPayload;

	    	var decoded = jwt.verify(token, 'secret');

	    	res.json(decoded.email);
	    } else {
	    	res.json('No token');
	    }
	}

	async test (req, res, next) {
		try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({message: "Unathorized"});
            }
            const decoded = jwt.verify(token, 'secret');
            // if (decoded.role !== role) {
            //     return res.status(403).json({message: "Access denied"})
            // }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Invalid token"})
        }

	}

}

module.exports = new UserController();