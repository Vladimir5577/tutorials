console.log('------------------------------------------------------------');

// Object Literal
const book1 = {
	title: 'Book One',
	author: 'Author',
	year: '2015',
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
};

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());

console.log('------------------------------------------------------------');

const book2 = {
	title: 'Book Two',
	author: 'Author Two',
	year: '2000',
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
};

console.log(book2.getSummary());
console.log(Object.keys(book2));
console.log(Object.values(book2));


console.log('------------------------------------------------------------');
