/*************************************
 *
 *	 name function with multiple parameter
 *	
 *************************************/

// usual function
function sum () {
	return a + b;
}

// arrow function 
let sum2 = (a, b) => {
	return a + b
}

// short form if 1 line of code (in 1 line)
let sum2 = (a, b) => a + b



/*****************************************
 *
 * name function with 1 parametr
 *
 * ****************************************/

// usual function
function isPositive (number) {
	return number >= 0
}

// arrow function
let isPositive2 = (number) => {
	return number >= 0
}

// short form in 1 line
let isPositive2 = number => number >= 0


/************************************
 *
 * name function with no paramert
 *
 * **************************************/

// usual function
function randomNumber () {
	return Math.random
}

// arrow function
let randomNumber2 = () => {
	return Math.random
}

// short form in 1 line
let randomNumber2 = () => Math.random


/***********************************************
 *
 *  anonymous function 
 *
 * *********************************************/


// usual function
document.addEventListener('click', function () {
	console.log('Click')
})

// arrow function
document.addEventListener('click', () =>  {
	console.log('Click')
})

// short form in 1 line
document.addEventListener('click', () => console.log('Click'))
