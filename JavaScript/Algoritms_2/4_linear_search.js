// linear search

const items = [1, 5, 2, 7, 3, 12, 6, 10];

function search (list, item) {
	let hasItem = null;
	let counter = 0;
	 
	for (let e of list) {
		counter ++;
		if (e === item) {
			hasItem = true;
			break;
		}
	}

	console.log(counter);
	return hasItem;
}

console.log(search(items, 12));


