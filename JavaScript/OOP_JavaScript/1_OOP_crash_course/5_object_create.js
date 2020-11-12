// Object of protos
const bookProtos = {
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
	getAge: function () {
		return `${this.title} is ${year} years old`;
	}
};


// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'Author';
book1.year = '2011';


/*
// another way (not working maybe for browser)
const book1 = Object.create(bookProtos, {
	title: { value: 'Book One' },
	author: { value: 'Author' },
	year: { value: '2011' }
});
*/

console.log(book1);
