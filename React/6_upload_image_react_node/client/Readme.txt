Create react app:

	$ npx create-react-app client
	$ cd client
	$ npm start // or 'yarn start'

Install :
	
	$ npm i axios

In the project delete:

		- App.test.js
		- index.css
		- logo.svg
		- reportWebVitals.js
		- setupTest.js

	In index.js remove lines
		- import './index.css';
		- import reportWebVitals from './reportWebVitals';
		- reportWebVitals();

	In App.js remove lines
		- import logo from './logo.svg';
		- teg <header> completely

In package.json add --- ?? (not working)
	"proxy": "http://localhost:5000"


Add bootstrap link to public/index.html
