class Book {
	constructor (title, author, year) {
		this.titel = title;
		this.author = author;
		this.year = year;
	}
	
	getSummary () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

// Magazine Subclass
class Magazine extends Book {
	constructor (title, author, year, month) {
		super(title, author, year);
		this.month = month;
	}
}

// Instantiation Magazine]
const mag1 = new Magazine('Mag One', 'Author', '2014', 'November');

console.log(mag1);
console.log(mag1.getSummary());

