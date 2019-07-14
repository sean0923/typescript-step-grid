import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodoAction {
	type: ActionTypes.FETCH_TODO;
	payload: Todo[];
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>(url);

		dispatch<FetchTodoAction>({
			type: ActionTypes.FETCH_TODO,
			payload: response.data,
		});
	};
};
