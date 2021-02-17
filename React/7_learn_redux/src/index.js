import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './Reducers';

const store = createStore(allReducer);


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store} >
	    	<App />
  		</Provider>
	</React.StrictMode>,
  document.getElementById('root')
);