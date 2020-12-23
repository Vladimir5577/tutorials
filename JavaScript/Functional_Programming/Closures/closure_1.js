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
