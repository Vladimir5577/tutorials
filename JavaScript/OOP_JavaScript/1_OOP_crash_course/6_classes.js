class Book {
	constructor (title, author, year) {
		this.titel = title;
		this.author = author;
		this.year = year;
	}
	
	getSummary () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge () {
		const years = new Date().getFullYear() - this.year;
	}

	revise (newYear) {
		this.year = newYear;
		this.revised = true;
	}

	static topBookStore () {
		return 'JavaScript Design Patterns';
	}
}

// Instantiate Object
const book1 = new Book('Book One', 'Author', '2011');

console.log(book1);

book1.revise('2017');
console.log(book1);

console.log(Book.topBookStore());
