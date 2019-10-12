import { all, put, takeEvery } from "redux-saga/effects";
import { todoActions } from "./index";

//workers

function* getTodos(action: ReturnType<typeof todoActions.fetchTodos>) {
	try {
		// const { _todosClient } = K2RestService;
		// const response: IApiResponse<FindResponse> = yield K2RestService.toResponse(_todosClient.find({ criteria: action.payload }));
		// yield put(todoActions.setTodos(response));
	} catch (e) {
		yield put(todoActions.todoLoading(false));
		console.log("error");
	}
}

//watcher

export default function* todoSagas() {
	yield all([yield takeEvery(todoActions.fetchTodos.type, getTodos)]);
}
