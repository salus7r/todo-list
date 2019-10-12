import { TodoItem } from "../../../autorestClients/TodoList/TodoList.Client/models";

export interface TodoManagement {
	loading: boolean;
	todoList: Array<TodoItem>;
	todoItemSelected: TodoItem;
}

export interface TodoCriteria {
	filterType: FilterType;
}

export enum FilterType {
	All = 1,
	Active = 2,
	Completed = 3
}

export enum StatusType {
	Active = 1,
	Completed = 2
}
