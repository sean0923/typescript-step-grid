import { combineReducers } from 'redux';

import { Todo } from '../actions/rootActions';
import { todosReducer } from './todosReducer';

export interface RootReducer {
	todos: Todo[];
}

export const rootReducers = combineReducers<RootReducer>({
	todos: todosReducer,
});
