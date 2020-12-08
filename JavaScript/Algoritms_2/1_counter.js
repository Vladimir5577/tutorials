// ==================================================

/*
function counter () {
	for (let n = 0; n <= 10; n++) {
		console.log(n);	 // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
	}
}

counter();
*/


// ==================================================

/*
// with recursion
function counter (n) {
	console.log(n);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

	if (n === 10) {
		return;
	}

	return counter(n + 1);
}

counter(0);
*/

// ==================================================


/*
const items = [[1, 2, 3], [4, 5, 6]];

function findSix (i) {
	let hasSix = 'no!';
	i.forEach(a => {
		a.forEach(b => {
			if (b === 6) {
				hasSix = 'yes!';
			}
		});
	});

	return hasSix;
}

console.log(findSix(items));  // yes!
*/


// ==================================================

// with recursion
const items = [[1, 2, 3], [4, 5, [6]]];

function findSix (i) {
	let hasSix = 'no!';

	i.forEach(a => {
		if (a === 6) {
			hasSix = 'yes!';
		}

		if (Array.isArray(a)) {
			hasSix = findSix(a);
		}
	});

	return hasSix;
}

console.log(findSix(items));


// ==================================================
