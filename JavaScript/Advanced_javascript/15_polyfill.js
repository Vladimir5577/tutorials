const num = 5;

// Math.double - not exist we need to create it (polyfill)
Math.double = function (number) {
	return number * 2;
};


console.log(Math.double(num)); 
