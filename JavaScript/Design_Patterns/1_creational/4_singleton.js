class Database {
	constructor (data) {

		if (Database.exist) {
			console.log('Connection already created!');
			return Database.instance;
		}

		Database.instance = this;
		Database.exist = true;
		this.data = data;
	}

	getData () {
		return this.data;
	}
}


const mongo = new Database('MongoDB');
console.log(mongo.getData());


const mongo1 = new Database('MongoDB');
const mongo2 = new Database('MongoDB');
const mongo3 = new Database('MongoDB');

