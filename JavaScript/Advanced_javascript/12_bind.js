const name = 'Bob';

const person = {
	name: 'Mike',
};

function printName () {
	console.log(this.name + ' - bind name');
}

const newPrintName = printName.bind(person);
newPrintName();

console.log(name + ' - name from const');

console.log('------------------------------------------');

function sum (a, b) {
	return a + b;
}

// first argument of bind is 'this' then the rest arguments of the function 

const sumTwo = sum.bind(null, 2);
/*
	with this bind we created womething like
	function sumTwo (b) {
		reutrn 2 + b;
	}
*/

console.log(sumTwo(3));

const sumTwoAndThree = sum.bind(null, 2, 3); 

console.log(sumTwoAndThree());


console.log('----------------------------------------------');

function product (a, b) {
	return a * b;
}

const numbers = [1, 2, 3, 4, 5];

// for example we need double every numbers of the array

/*
// without bind
const doubleNumbers = numbers.map(number => {
	return product(2, number);
});
*/

// with bind
const doubleNumbers = numbers.map(product.bind(null, 2));
console.log(doubleNumbers);

