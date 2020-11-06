// Object
const obj = {
	name: 'Bob',
	age: 23,
	job: 'Programmer'
};

// array
const entries = [
	['name', 'Bob'],
	['age', 25],
	['job', 'Programmer']
];

console.log(Object.entries(obj));			 // transfer object to array
// console.log(Object.fromEntries(entries));	// transfer array to object

const map = new Map(entries);

console.log(map);
console.log(map.get('name'));

map.set('newField', 53)
	.set(obj, 'value if lbject');

console.log(map);
console.log(map.get(obj));

/*
// delete
map.delete('job');
console.log(map.has('job'));  // return fals
*/

console.log(map.size);

console.log('---------------------------------------------------');

for (let entry of map.entries()) {
	console.log(entry);
}


console.log('---------------------------------------------------');
for (let val of map.values()) {
	console.log(val);
}

console.log('---------------------------------------------------');

const users = [
	{name: 'Bob'},
	{name: 'Mike'},
	{name: 'Jack'},
];

const visits = new Map();

visits
	.set(users[0], new Date())
	.set(users[1], new Date(new Date().getTime() + 1000 * 60))
	.set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit (user) {
	return visit.get(uset);
} 

console.log(users[2]);
