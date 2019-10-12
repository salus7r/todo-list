export interface TodoManagement {
	loading: boolean;
	todoList: Array<TodoItem>;
	todoItemSelected: TodoItem;
}

export interface TodoItem {
	id?: number;
	title: string;
	description?: string;
	status: StatusType;
	subTasks: Array<TaskItem>;
}

export interface TaskItem {
	id?: number;
	title: string;
	status: StatusType;
}

export interface TodoCriteria {
	filterType: FilterType;
}

export enum FilterType {
	all,
	active,
	completed
}

export enum StatusType {
	inCompleted,
	completed
}
