// Validation
const Joi = require('@hapi/joi');

// Register validation
const registerValidation = (data) => {

	const schema = Joi.object({
		name: Joi
			.string()
			.min(3)
			.required(),
		email: Joi.string()
			.min(3)
			.email()
			.required(),
		password: Joi.string()
			.min(3)
			.required()
	});

	return schema.validate(data);
};

const loginValidation = (data) => {

	const schema = Joi.object({
		email: Joi.string()
			// .min(3)
			.email()
			.required(),
		password: Joi.string()
			.min(3)
			.required()
	});

	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;