import { ImmerReducer } from "immer-reducer";
import { TodoManagement, TodoCriteria, TodoItem, StatusType, TaskItem } from "./types";

const initialState: TodoManagement = {
	loading: false,
	todoList: [],
	todoItemSelected: null
};

class TodosReducer extends ImmerReducer<TodoManagement> {
	todoLoading(loading: boolean) {
		this.draftState.loading = loading;
	}

	clearTodos() {
		this.draftState.todoList = initialState.todoList;
		this.draftState.todoItemSelected = null;
	}

	fetchTodos(_criteria: TodoCriteria) {
		this.todoLoading(true);
	}

	setTodos(response: Array<TodoItem>) {
		this.draftState.todoList = response;
		this.todoLoading(false);
	}

	selectTodo(todo: TodoItem) {
		this.draftState.todoItemSelected = todo;
	}

	createTodoItem(_todo: TodoItem) {
		this.todoLoading(true);
	}

	updateTodoItem(_todo: TodoItem) {
		this.todoLoading(true);
	}

	updateStatusTodoItem(_id: number, _status: StatusType) {
		this.todoLoading(true);
	}

	deleteTodoItem(_id: number) {
		this.todoLoading(true);
	}

	addTodoTaskItem(_todo: TaskItem) {
		this.todoLoading(true);
	}

	updateTodoTaskItem(_todo: TaskItem) {
		this.todoLoading(true);
	}

	updateStatusTodoTaskItem(_id: number, _taskId: number, _status: StatusType) {
		this.todoLoading(true);
	}

	deleteTodoTaskItem(_id: number) {
		this.todoLoading(true);
	}
}

export { initialState, TodosReducer };
