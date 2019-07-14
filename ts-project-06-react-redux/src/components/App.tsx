import React from 'react';
import { connect } from 'react-redux';

import Test from './Test';

interface AppPros {
	counter: number;
	color: string;
}

const App = (props: AppPros) => {
	return (
		<div>
			<div>App</div>
			<div>{props.color}</div>
			<div>{props.counter}</div>
			<Test />
		</div>
	);
};

const mapStateToProps = (state: AppPros) => {
	return {
		counter: state.counter,
	};
};

export default connect(mapStateToProps)(App);
// export default App;
