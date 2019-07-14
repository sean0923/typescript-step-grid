import { Todo, FetchTodoAction } from '../actions/rootActions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: FetchTodoAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_TODO:
			return action.payload;

		default:
			return state;
	}
};
