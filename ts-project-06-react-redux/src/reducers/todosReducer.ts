import { Todo, FetchTodoAction, ActionTypes } from '../actions/rootActions';

export const todosReducer = (state: Todo[] = [], action: FetchTodoAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_TODO:
			return action.payload;

		default:
			return state;
	}
};
