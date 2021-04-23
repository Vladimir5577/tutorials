// Set --- is array but every value should be unique

/*
// old way keep unique list
const uniqueList = [1, 2, 3, 4, 5];
const newNumber = 4;

if (!uniqueList.include(newNumber)) {
	uniqueList.add(newNumber);
}

console.log(uniqueList);
*/

// set take only unique value

const set = new Set([1, 2, 3, 4, 5, 4, 4, 4, 4, 4]);  
set.add(7);			 // it will add
set.add(4); 		 // it not added because it exist
set.has(5);			 // return true if exist
set.delete(5);		 // delete from set
// set.clear()			 // delete everything
console.log(set);	 // it will be unique


set.forEach(value => {
	console.log(value);
});


console.log('--- Remove duplicats -----------------------------------');

function removeDups (array) {
	return [...new Set(array)];
}

console.log(removeDups([1, 2, 3, 4, 3, 2, 5]));
