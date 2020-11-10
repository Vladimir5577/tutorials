const {Schema, model} = require('mongoose');

const schema = new Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	}
});

schema.methods.toJson = function () {
	const myData = this.toObject();
	myData._id.toString();
	return myData;
};

module.exports = model('Todo', schema);