import { all, put, takeEvery } from "redux-saga/effects";
import { todoActions } from "./index";
import RestClient from "../../../autorestClients/RestClient";
import { TodoItem } from "../../../autorestClients/TodoList/TodoList.Client/models";

const { _todoClient } = RestClient;

//workers

function* getTodos(action: ReturnType<typeof todoActions.fetchTodos>) {
	try {
		var haveError = false;
		var response: Array<TodoItem> = yield _todoClient
			.getTodoList({ filterType: action.payload })
			.then(res => res)
			.catch(error => {
				console.log(error);
				haveError = true;
			});
		yield put(todoActions.setTodos(response));
		yield put(todoActions.setError(haveError));
		yield put(todoActions.todoLoading(false));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

function* addTodoItem(action: ReturnType<typeof todoActions.addTodoItem>) {
	try {
		var haveError = false;
		var response: TodoItem = yield _todoClient
			.addTodoItem({ request: action.payload })
			.then(res => res)
			.catch(error => {
				console.log(error);
				haveError = true;
			});
		yield put(todoActions.updateTodoList(response, haveError));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

function* updateStatusTodoItem(action: ReturnType<typeof todoActions.updateStatusTodoItem>) {
	try {
		var haveError = false;
		var response: boolean = yield _todoClient
			.updateTodoItemStatus({ request: action.payload })
			.then(res => res.body)
			.catch(error => {
				console.log(error);
				haveError = true;
			});
		yield put(todoActions.updateTodoListAfterStatusUpdate(response, haveError, action.payload));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

function* deleteTodoItem(action: ReturnType<typeof todoActions.deleteTodoItem>) {
	try {
		var haveError = false;
		var response: boolean = yield _todoClient
			.deleteTodoItem({ request: action.payload })
			.then(res => res.body)
			.catch(error => {
				console.log(error);
				haveError = true;
			});
		yield put(todoActions.updateTodoListAfterDelete(response, haveError, action.payload));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

function* updateTodoItem(action: ReturnType<typeof todoActions.updateTodoItem>) {
	try {
		var haveError = false;
		var response: TodoItem = yield _todoClient
			.updateTodoItem({ request: action.payload })
			.then(res => res)
			.catch(error => {
				console.log(error);
				haveError = true;
			});
		yield put(todoActions.updateTodoListAfterStatusTaskUpdate(response, haveError));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

function* updateStatusTodoTaskItem(action: ReturnType<typeof todoActions.updateStatusTodoTaskItem>) {
	try {
		var haveError = false;
		var response: boolean = yield _todoClient
			.updateTaskItemStatus({ request: action.payload })
			.then(res => res.body)
			.catch(error => {
				console.log(error);
				haveError = true;
			});
		yield put(todoActions.updateTodoTaskListAfterStatusUpdate(response, haveError, action.payload));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

function* deleteTodoTaskItem(action: ReturnType<typeof todoActions.deleteTodoTaskItem>) {
	try {
		var haveError = false;
		var response: boolean = yield _todoClient
			.deleteTaskItem({ request: action.payload })
			.then(res => res.body)
			.catch(error => {
				console.log(error);
				haveError = true;
			});
		yield put(todoActions.updateTodoTaskListAfterDelete(response, haveError, action.payload));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

//watcher

export default function* todoSagas() {
	yield all([
		yield takeEvery(todoActions.fetchTodos.type, getTodos),
		yield takeEvery(todoActions.addTodoItem.type, addTodoItem),
		yield takeEvery(todoActions.updateStatusTodoItem.type, updateStatusTodoItem),
		yield takeEvery(todoActions.deleteTodoItem.type, deleteTodoItem),
		yield takeEvery(todoActions.updateTodoItem.type, updateTodoItem),
		yield takeEvery(todoActions.updateStatusTodoTaskItem.type, updateStatusTodoTaskItem),
		yield takeEvery(todoActions.deleteTodoTaskItem.type, deleteTodoTaskItem)
	]);
}
