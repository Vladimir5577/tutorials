/*
	Filter go through array 
	and if filter returns true
	element will stay in the array.
	If filter returns an element will be remove
*/

// =================================================

const filetrOutOdds = nums => nums.filter(num => num % 2 === 0);

const list = [1, 5, 7, 2, 6, 3, 5, 4, 10, 50, 51];
console.log(filetrOutOdds(list));


// =================================================

const filterState = (list, state) => list.filter(person => person.state === state);

 const people = [
    {name: 'Brian Holt', state: 'CA'},
    {name: 'Ryan Florence', state: 'WA'},
    {name: 'Kent Dodds', state: 'UT'},
    {name: 'Kyle Simpson', state: 'TX'},
    {name: 'Pete Hunt', state: 'CA'},
    {name: 'Jafar Husain', state: 'CA'},
    {name: 'Yehuda Katz', state: 'OR'},
    {name: 'Matt Zabriskie', state: 'UT'},
    {name: 'Marshall Upshur', state: 'CA'}
  ];

console.log(filterState(people, 'CA'));


// =================================================

const myFilter = (list, fn) => {
	const answer = [];

	for (let i = 0; i < list.length; i++) {
		if (fn(list[i])) {
			answer.push(list[i]);
		}
	}

	return answer;
};

const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12];
const fn = num => num % 3 === 0;

console.log(myFilter(arr2, fn));