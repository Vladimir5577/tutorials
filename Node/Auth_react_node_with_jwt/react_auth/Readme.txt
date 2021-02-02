Create react app:

	$ npx create-react-app router
	$ cd router
	$ npm start // or 'yarn start'
	$ npm install axios



Delete: 

	Inside project delete :

		- index.css 
		- App.test.js
		- reportWebVitals.js 
		- setupTest.js 
		- (logo.svg) - optional and remove include in App.js

	In index.js file remove lines :

		- include index.css
		- import reportWebVitals from './reportWebVitals'
		- reportWebVitals();

	In App.js file remove :

		- header (completely)
		- import logo from './logo.svg';


Before building add to 'package.json' homepage property with future url:
	
	...
	"homepage": ".",
	...