import { all, put, takeEvery } from "redux-saga/effects";
import { todoActions } from "./index";
import RestClient from "../../../autorestClients/RestClient";
import { AddTodoItemResponse, TodoItem } from "../../../autorestClients/TodoList/TodoList.Client/models";

const { _todoClient } = RestClient;

//workers

function* getTodos(action: ReturnType<typeof todoActions.fetchTodos>) {
	try {
		debugger;
		var response: Array<TodoItem> = yield _todoClient
			.getTodoList()
			.then(res => res)
			.catch(error => console.log(error));
		yield put(todoActions.setTodos(response));
		yield put(todoActions.todoLoading(false));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

function* addTodoItem(action: ReturnType<typeof todoActions.addTodoItem>) {
	try {
		var response: AddTodoItemResponse = yield _todoClient
			.addTodoItem({ request: action.payload })
			.then(res => res)
			.catch(error => console.log(error));
		yield put(todoActions.getTodoItemsAgain(response));
	} catch (e) {
		yield put(todoActions.setError(true));
		yield put(todoActions.todoLoading(false));
	}
}

//watcher

export default function* todoSagas() {
	yield all([yield takeEvery(todoActions.fetchTodos.type, getTodos), yield takeEvery(todoActions.addTodoItem.type, addTodoItem)]);
}
