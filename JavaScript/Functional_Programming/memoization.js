console.log('-------------------------------------------------------------');

const prevValues = [];

function square (n) {
	if (prevValues[n] != null) {
		return prevValue[n];
	}

	let result = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			result += 1;
		}
	}
	
	prevValues[n];
	return result;
}

console.log(square(5));

console.log('-------------------------------------------------------------');

// fibonacci sequence

function fib (n, prevValue = []) {
	if (prevValues[n] != null) {
		return prevValues[n];
	}

	let result;
	if (n <= 2) {
		result = 1;
	} else {
		result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
	}

	prevValue[n] = result;
	return result;
}

console.log(fib(9));

console.log('-------------------------------------------------------------');
console.log('---- No memoization -----------------------------------------');

// inefficient way (no memoization)
const inefficientSquare = num => {
	let total = 0;

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			total++;
		}
	}

	return total;
};

const start = new Date();
console.log(inefficientSquare(40000));
console.log(new Date() - start);

const start2 = new Date();
console.log(inefficientSquare(40000));
console.log(new Date() - start2);

console.log('-------------------------------------------------------------');
console.log('---- Memoization --------------------------------------------');

// memoization

const memoize = func => {
	// create cache for result
	const result = {};

	return (...args) => {
		// create a key for our cache
		const argsKey = JSON.stringify(args);

		// Only execute func if no cache val
		if (!result[argsKey]) {
			result[argsKey] = func(...args);
		}

		return result[argsKey];
	};
};

const squareMemoiz = memoize(num => {
	let total = 0;

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			total++;
		}
	}

	return total;
});

const startMem = new Date();
console.log(squareMemoiz(40000));
console.log(new Date() - startMem);

const startMem2 = new Date();
console.log(squareMemoiz(40000));
console.log(new Date() - startMem2);


console.log('-------------------------------------------------------------');
