function Ship(name) {
	this.name = name;
}

Ship.prototype.getShip = function() {
	return this.name;
}

const ship = new Ship("Battleship");


/*
// hard bind
ship.getShip = ship.getShip.bind({name: "Jack"});
console.log(ship.getShip.call(ship)); // Jack
*/

console.log(ship.getShip.call({name: "Jim"})); // Jim


/*
// with call back
function getDetails(func) {
	console.log(func());
}

getDetails(ship.getShip.bind(ship));
*/

/*
// easy way
var func = ship.getShip.bind(ship);
console.log(func);
console.log(func());
*/


/*
// summary to understand this keyword inside a function while it is executing

	- 1st if function is arrow function then this will be the object at function evaluation time

	- 2st is the function hard bineded then the this keyword is the hardbinded object

	- 3nd are you calling function with call or apply ex : 
		
		ship.getName.call({ name: "jack"}) 
		
then on execution of getName function the this keyword will be the object you passed in call or apply methods first parameter `

	- 4rd who call this function ship.getName(); here ship object call getName function and if it is not a hard binded function the this keyword inside the function on execution will be ship object

*/
