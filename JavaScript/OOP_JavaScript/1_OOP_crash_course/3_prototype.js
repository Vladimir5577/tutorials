console.log('------------------------------------------------------------');

// Constructor

function Book (title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;

}

// getSummary (prototype) 
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge (prototype)
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revised = true;
};


// Instantiate an Object
const book1 = new Book('Book One', 'Author', '2011');
const book2 = new Book('Book Two', 'Author Two', '2014');

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book2.getAge());


console.log('------------------------------------------------------------');

// Change year
book2.revise('2002 revised');
console.log(book2);

console.log('------------------------------------------------------------');
