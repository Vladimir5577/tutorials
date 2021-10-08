Install eslint:
	
	$ npm install eslint --save-dev

	$ npx eslint --init

Install dependencies:

	$ npx install-peerdeps --dev eslint-config-airbnb-base

	In .eslint.yml change:
		extends: 'airbnb-base/legacy'

Check:

	$ npx eslint index.js

Fix problems:

	$ npx eslint index.js --fix