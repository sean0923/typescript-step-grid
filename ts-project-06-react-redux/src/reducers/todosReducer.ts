import { Todo, ActionTypes, Action } from '../actions/rootActions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.FETCH_TODO:
			return action.payload;

		case ActionTypes.DELETE_TODO:
			return state.filter(({ id }) => {
				if (id === action.payload) {
					return false;
				}
				return true;
			});

		default:
			return state;
	}
};
