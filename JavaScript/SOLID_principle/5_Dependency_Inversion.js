// Dependency inversion

class Fetch {
	request (url) {
		// return fetch(url).then(r => r.json());
		return Promise.resolve('data from fetch');
	}
}

class LocalStorage {
	get () {
		return 'Data form local storage';
	}
}

class FetchClient {
	constructor () {
		this.fetch = new Fetch();
	}

	clientGet () {
		return this.fetch.request('vk.com');
	}
}

class LocalStorageClient {
	constructor () {
		this.localStorage = new LocalStorage();
	}
	
	clientGet () {
		return this.localStorage.get();
	}
}

class Database {
	constructor (client) {
		this.client = client;
	}

	getData (key) {
		return this.client.clientGet(key);
	}
}

// const db = new Database(new FetchClient()); 
const db = new Database(new LocalStorageClient()); // put another data to cunstructor without change logic

console.log(db.getData('rand'));
