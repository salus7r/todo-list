let nextTodoId = 0;
export const addTodo = (text: string) => ({
	type: ADD_TODO,
	id: nextTodoId++,
	text
});

export const setVisibilityFilter = (filter: string) => ({
	type: SET_VISIBILITY_FILTER,
	filter
});

export const toggleTodo = (id: number) => ({
	type: TOGGLE_TODO,
	id
});

/*
 * action types
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * other constants
 */

export const VisibilityFilters = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_COMPLETED: "SHOW_COMPLETED",
	SHOW_ACTIVE: "SHOW_ACTIVE"
};
