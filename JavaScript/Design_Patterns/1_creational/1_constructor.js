
/*
// old way
function Server (name, ip) {
	this.name = name;
	this.ip = ip;
}

Server.prototype.getUrl = function () {
	return `https://${this.ip}:80`;
}

const aws = new Server('AWS German', '83.23.45.53');
console.log(aws.getUrl());
*/

// new way
class Server {
	constructor (name, ip) {
		this.name = name;
		this.ip = ip;
	}

	getUrl () {
		return `https://${this.ip}:80`;
	}
}

const aws = new Server('AWS German', '83.23.45.53');
console.log(aws.getUrl());

/*
	 Instantiation of a function with 'new' keywords
		1 - create {} - empty object
		2 - asign 'this' to empty object
		3 - return 'this' key word
		4 - asign 'this' to a wariable

	Call a function without 'new' will return undefined 
*/
