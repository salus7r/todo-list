import {
	AddTodoItemReq,
	UpdateTodoItemReq,
	UpdateTodoItemStatusReq,
	DeleteTodoItemReq,
	AddTaskItemReq,
	UpdateTaskItemReq,
	UpdateTaskItemStatusReq,
	DeleteTaskItemReq,
	TodoItem
} from "./../../../autorestClients/TodoList/TodoList.Client/models";
import { ImmerReducer } from "immer-reducer";
import { TodoManagement, FilterType } from "./types";

const initialState: TodoManagement = {
	loading: false,
	todoList: [],
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
	}

	fetchTodos(_filterType: FilterType) {
		this.todoLoading(true);
	}

	setTodos(response: Array<TodoItem>) {
		this.draftState.todoList = response;
		this.todoLoading(false);
	}

	addTodoItem(_req: AddTodoItemReq) {
		this.todoLoading(true);
	}

	updateTodoList(_res: TodoItem, _haveError: boolean) {
		if (!_haveError) {
			this.draftState.todoList = [_res, ...this.draftState.todoList];
		} else {
			this.setError(true);
		}
		this.todoLoading(false);
	}

	updateTodoItem(_req: UpdateTodoItemReq) {
		this.todoLoading(true);
	}

	updateStatusTodoItem(_req: UpdateTodoItemStatusReq) {
		this.todoLoading(true);
	}

	updateTodoListAfterStatusUpdate(_res: boolean, _haveError: boolean, _req: UpdateTodoItemStatusReq) {
		if (!_haveError) {
			this.draftState.todoList = this.draftState.todoList.map(item => {
				if (item.id === _req.id) {
					item.status = _req.status;
				}

				return item;
			});
		} else {
			this.setError(true);
		}
		this.todoLoading(false);
	}

	deleteTodoItem(_req: DeleteTodoItemReq) {
		this.todoLoading(true);
	}

	updateTodoListAfterDelete(_res: boolean, _haveError: boolean, _req: DeleteTodoItemReq) {
		if (!_haveError) {
			this.draftState.todoList = this.draftState.todoList.filter(item => item.id !== _req.id);
		} else {
			this.setError(true);
		}
		this.todoLoading(false);
	}

	addTodoTaskItem(_req: AddTaskItemReq) {
		this.todoLoading(true);
	}

	updateTodoTaskItem(_req: UpdateTaskItemReq) {
		this.todoLoading(true);
	}

	updateTodoListAfterStatusTaskUpdate(_res: TodoItem, _haveError: boolean) {
		if (!_haveError) {
			this.draftState.todoList = this.draftState.todoList.map(item => {
				if (item.id === _res.id) {
					item = _res;
				}

				return item;
			});
		} else {
			this.setError(true);
		}
		this.todoLoading(false);
	}

	updateStatusTodoTaskItem(_req: UpdateTaskItemStatusReq) {
		// debugger;
		this.todoLoading(true);
	}

	updateTodoTaskListAfterStatusUpdate(_res: boolean, _haveError: boolean, _req: UpdateTaskItemStatusReq) {
		if (!_haveError) {
			this.draftState.todoList = this.draftState.todoList.map(item => {
				if (item.id === _req.todoItemId) {
					item.subTasks = item.subTasks.map(task => {
						if (task.id === _req.taskItemId) {
							task.status = _req.status;
						}

						return item;
					});
				}

				return item;
			});
		} else {
			this.setError(true);
		}
		this.todoLoading(false);
	}

	deleteTodoTaskItem(_req: DeleteTaskItemReq) {
		this.todoLoading(true);
	}

	updateTodoTaskListAfterDelete(_res: boolean, _haveError: boolean, _req: DeleteTaskItemReq) {
		if (!_haveError) {
			this.draftState.todoList = this.draftState.todoList.map(item => {
				if (item.id === _req.todoItemId) {
					item.subTasks = item.subTasks.filter(task => task.id !== _req.taskItemId);
				}

				return item;
			});
		} else {
			this.setError(true);
		}
		this.todoLoading(false);
	}
}

export { initialState, TodosReducer };
