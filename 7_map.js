// Map --- convert array of arrays to object

const map = new Map([
	[1, 'A'],
	[2, 'B'],
	[3, 'C'],
	[4, 'D'],
]);


console.log(map);

map.forEach((value, key) => {
	console.log(key, value);
});

map.set(5, 'E');		 // add value
console.log(map.get(5)); // get value by key

map.size;				 // size
map.has(6); 			 // check if value exest or not
map.delete(5);			 // delete 
map.clear();			 // clear map completely

// ===========================================
// Loop though an object

const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
};

// we con not call forEach on an object directly

Object.entries(obj).forEach(([key, value]) => {
	console.log(key, value);
});
