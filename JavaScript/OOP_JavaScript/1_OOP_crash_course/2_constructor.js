console.log('------------------------------------------------------------');

// Constructor

function Book (title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

const book1 = new Book('Book One', 'Author', '2011');
const book2 = new Book('Book Two', 'Author Two', '2014');

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());
console.log(book2.getSummary());
