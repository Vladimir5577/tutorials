console.log('-------------------------------------------------------');

const createCounter = () => {
	let count = 0;

	return {
		increment () {
			count++
		},
		decrement () {
			count--
		},
		get () {
			return count
		}
	};
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// output -1


console.log('-------------------------------------------------------');


/*

// Bad pracrice (without closure) because 'a' in the global scope


let a = 0;

function count () {
	a++;
	console.log(a);
}

count();
count();
count();

*/

function foo () {
	let a = 0; // exist only inside foo
	return function () { // closed on externl funciton closure
		a++;
		console.log(a);
	}
}

// closure = cod of the function + data to the function 
let d = foo();

let a = 'Hello'; // won't affect animore

d();
d();
d();

console.log('-------------------------------------------------------');