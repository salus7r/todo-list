import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import todos, { todoSagas } from "./todos";

export function* rootSaga() {
	yield all([todoSagas()]);
}

const reducers = combineReducers({ todos });

export default reducers;
