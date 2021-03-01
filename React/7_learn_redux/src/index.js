import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT': 
			return state - 1;
		default:
			return state;
	};
};

const loggedReducer = (state = false, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return !state;
		default:
			return state;
	}
};

const textTest = () => {
	return 'bla bla 123';
};

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
	text: textTest
});

const store = createStore(allReducers);
 
ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}> 
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
