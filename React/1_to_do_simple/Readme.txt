Create React

	$ npx create-react-app my-app
	$ cd my-app
	$ npm start // yarn start

Go to and delete 
	- src/App.test.js
	- src/index.css
	- src/logo.svg

	In src/App.js delete
		- import logo from './logo.svg';
		- <header className="App-header"> completely

	In src/index.js delete
		- import './index.css';

	Also delete everything inside src/App.css

Build:

	$ npm run build
