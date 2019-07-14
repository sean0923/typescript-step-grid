import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Todo, FetchTodoAction, fetchTodos } from '../actions/rootActions';
import { RootReducer } from '../reducers/rootReducer';

interface AppPros {
	todos: Todo[];
	fetchTodos(): any;
}

const App = ({ todos, fetchTodos }: AppPros) => {
	const onButtonClick = () => {
		fetchTodos();
	};

	return (
		<div>
			<button onClick={onButtonClick}>Fetch Todos</button>
			{todos.map((todo: Todo) => {
				return (
					<FlexWrapper key={todo.id}>
						<div>{todo.id}</div>
						<div>{todo.title}</div>
						<div>{todo.completed && 'completed'}</div>
					</FlexWrapper>
				);
			})}
		</div>
	);
};

const mapStateToProps = ({ todos }: RootReducer): { todos: Todo[] } => {
	return { todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
// export default App;

const FlexWrapper = styled.div`
	display: flex;
	& > *:not(:last-child) {
		margin-right: 1rem;
	}
`;
