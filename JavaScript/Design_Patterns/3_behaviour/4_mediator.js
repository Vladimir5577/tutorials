class User {
	constructor (name) {
		this.name = name;
		this.room = null;
	}

	send (message, to) {
		this.room.send(message, this, to);
	}

	receive (message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`);
	}
}

class ChatRoom {
	constructor () {
		this.users = {};
	}
	
	register (user) {
		this.users[user.name] = user;
		user.room = this;
	}

	send (message, from, to) {
		if (to) {
			to.receive(message, from);
		} else {
			Object.keys(this.users).forEach(key => {
				if (this.users[key] !== from) {
					this.users[key].receive(message, from);
				}
			});
		}
	}
}


const bob = new User('Bob');
const mike = new User('Mike');
const donna = new User('Donna');

const room = new ChatRoom();

room.register(bob);
room.register(mike);
room.register(donna);

bob.send('Hello', donna);
donna.send('Hello Hello', mike);
mike.send('Hi everybody');

