// Liskov substitution principle

console.log('-------------------------------------------------------------');

class Person {

}

// Create class 
class Member extends Person {
	access () {
		console.log('You have an access');
	}
}

class Guest extends Person {
	isGuest = true;
}

class Frontend extends Member {
	canCreateFrontend () {}
}

class Backend extends Member {
	canCreateBackend () {}
}


// not good to extends from basic class 'Person'
class PersonFromDifferentCompany extends Guest {
	access () {
		// throw new Error('You dont have access. Get out!');
		console.log('You dont have access. Get out!');
	}
}

function openSecretDoor (member) {
	member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new PersonFromDifferentCompany());


console.log('-------------------------------------------------------------');

/*
 * in this principle we should correctly chose layers of abstraction and inheritance
 *	
 *	
 *
 */
