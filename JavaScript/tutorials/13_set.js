// set keep data uniq

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

set.add(10).add(20).add(30).add(20);

/*
console.log(set);
console.log(set.has(20));  // true
console.log(set.has(42));  // false
console.log(set.size);
console.log(set.delete(1));
console.log(set.clear());
*/

console.log(set.values());

console.log('--- unique value from array -------------------------------');

// use set to return unique value from array

function uniqValue (array) {
	return [...new Set(array)];
	// return Array.from(new Set(array)); // another way
}

console.log(uniqValue([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5]));
