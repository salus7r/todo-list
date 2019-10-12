import {
	AddTodoItemReq,
	UpdateTodoItemReq,
	UpdateTodoItemStatusReq,
	DeleteTodoItemReq,
	AddTaskItemReq,
	UpdateTaskItemReq,
	UpdateTaskItemStatusReq,
	DeleteTaskItemReq,
	AddTodoItemResponse
} from "./../../../autorestClients/TodoList/TodoList.Client/models/index";
import { ImmerReducer } from "immer-reducer";
import { TodoManagement, StatusType, FilterType } from "./types";
import { TodoItem, TaskItem } from "../../../autorestClients/TodoList/TodoList.Client/models";

const initialState: TodoManagement = {
	loading: false,
	todoList: [],
	todoItemSelected: null,
	filterOptionSelected: FilterType.All,
	apiError: false
};

class TodosReducer extends ImmerReducer<TodoManagement> {
	setError(haveError: boolean) {
		this.draftState.apiError = haveError;
	}

	setFilter(filterType: FilterType) {
		this.draftState.filterOptionSelected = filterType;
	}

	todoLoading(loading: boolean) {
		this.draftState.loading = loading;

		if (loading) {
			this.setError(false);
		}
	}

	clearTodos() {
		this.draftState.todoList = initialState.todoList;
		this.draftState.todoItemSelected = null;
	}

	fetchTodos(_filterType?: FilterType) {
		this.todoLoading(true);
	}

	setTodos(response: Array<TodoItem>) {
		this.draftState.todoList = response;
		this.todoLoading(false);
	}

	selectTodo(todo: TodoItem) {
		this.draftState.todoItemSelected = todo;
	}

	addTodoItem(_req: AddTodoItemReq) {
		this.todoLoading(true);
	}

	getTodoItemsAgain(_res: AddTodoItemResponse) {
		if (_res.body) {
			var filterType = this.draftState.filterOptionSelected || initialState.filterOptionSelected;
			this.fetchTodos();
		} else {
			this.setError(true);
			this.todoLoading(false);
		}
	}

	updateTodoItem(_req: UpdateTodoItemReq) {
		this.todoLoading(true);
	}

	updateStatusTodoItem(_req: UpdateTodoItemStatusReq) {
		this.todoLoading(true);
	}

	deleteTodoItem(_req: DeleteTodoItemReq) {
		this.todoLoading(true);
	}

	addTodoTaskItem(_req: AddTaskItemReq) {
		this.todoLoading(true);
	}

	updateTodoTaskItem(_req: UpdateTaskItemReq) {
		this.todoLoading(true);
	}

	updateStatusTodoTaskItem(_req: UpdateTaskItemStatusReq) {
		this.todoLoading(true);
	}

	deleteTodoTaskItem(_req: DeleteTaskItemReq) {
		this.todoLoading(true);
	}
}

export { initialState, TodosReducer };
