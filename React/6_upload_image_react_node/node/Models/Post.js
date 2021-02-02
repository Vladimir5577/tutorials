const { Schema, model } = require('mongoose');

const schema = new Schema({
	title: {
		type: String,
		require: true
	},
	image: {
		type: String,
		require: true
	}
});

schema.methods.toJson = function () {
	const myData = this.toObject();
	myData._id.toString();
	return myData;
}

module.exports = model('Post', schema);