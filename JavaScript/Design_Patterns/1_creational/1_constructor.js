
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
