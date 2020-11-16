// Single Responsibility Principle

class News {
	constructor (title, text) {
		this.title = title;
		this.text = text;
		this.modified = false;
	}

	update (text) {
		this.text = text;
		this.modified = true;
	}

	/*
	// bad practice write different method in the class we should create separate class to modify output format
	
	toHTML () {
		return `
			<div>
				<h1>${this.title}</h1>
				<p>${this.text}</p>
			</div>
		`;
	}

	toJSON () {
		return JSON.stringify({
			title: this.title,
			text: this.text,
			modified: this.modified
		}, null, 2);  // to see json
	}

	*/
}

// a new class for responsibility
class NewsPrinter {
	constructor (news) {
		this.news = news;
	}

	html () {
		return `
			<div>
				<h1>${this.news.title}</h1>
				<p>${this.news.text}</p>
			</div>
		`;
	}

	json () {
		return JSON.stringify({
			title: this.news.title,
			text: this.news.text,
			modified: this.modified
		}, null, 2);  // to see json
	}

	xml () {
		return `
			<news>
				<title>${this.news.title}</title>
				<text>${this.news.text}</text>
			</news>
		`;
	}
}

const news = new News('Good news', 'Sports Game');

const printer = new NewsPrinter(news);


console.log('---- HTML ----------------------------------------------------'); 
console.log(printer.html());
console.log('---- JSON ----------------------------------------------------'); 
console.log(printer.json());
console.log('---- Xml  ----------------------------------------------------'); 
console.log(printer.xml());

console.log('--------- ----------------------------------------------------'); 
