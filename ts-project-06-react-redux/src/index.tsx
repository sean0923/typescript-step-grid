import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './reducers/store';

import App from './components/App';

ReactDOM.render(
	<Provider store={store}>
		<App color="red" />
	</Provider>,
	document.getElementById('root')
);
