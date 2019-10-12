import { DeleteTodoItemReq } from "./../../../autorestClients/TodoList/TodoList.Client/models/index";
import { filterType } from "./../../../autorestClients/TodoList/TodoList.Client/models/parameters";
import { all, put, takeEvery } from "redux-saga/effects";
import { todoActions } from "./index";
import RestClient from "../../../autorestClients/RestClient";
import { AddTodoItemResponse, TodoItem } from "../../../autorestClients/TodoList/TodoList.Client/models";

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

//watcher

export default function* todoSagas() {
	yield all([
		yield takeEvery(todoActions.fetchTodos.type, getTodos),
		yield takeEvery(todoActions.addTodoItem.type, addTodoItem),
		yield takeEvery(todoActions.updateStatusTodoItem.type, updateStatusTodoItem),
		yield takeEvery(todoActions.deleteTodoItem.type, deleteTodoItem)
	]);
}
