/*
	Closure:

	When a function return an other function and the returned function
	is executing at that moment the returned function can still access
	the parent scope where it was created.
*/


const message = 'Hello'; // not affected to the global scope

const myFunction = () => {
	const message = 'This is my message';
	const printMessage = () => {
		console.log(message);
	};

	return printMessage;
}

const myPrintMessage = myFunction();
myPrintMessage();

console.log(message); 
