import { FetchTodoAction, DeleteTodoAction } from './todosActions';

export enum ActionTypes {
	FETCH_TODO,
	DELETE_TODO,
}

export type Action = FetchTodoAction | DeleteTodoAction;
