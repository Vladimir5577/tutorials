Create typescript react

	$ npx create-react-app my-app --template typescript
	or
	$ yarn create react-app my-app --template typescript

	$ cd react_app  --- go to the directory
	$ npm start // or 'yarn start'


=======================

In the project delete:

		- App.test.js
		- index.css or App.css
		- logo.svg
		- reportWebVitals.js
		- setupTest.js
		- react-app-env.d.tsx

	In index.js remove lines
		- import './index.css';
		- import reportWebVitals from './reportWebVitals';
		- reportWebVitals();

	In App.js remove lines
		- import logo from './logo.svg';
		- teg <header> completely

========================

Before building add to 'package.json' homepage property with future url:
	
	...
	"homepage": ".",
	...

Build:

	$  npm run build