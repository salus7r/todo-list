import { applyMiddleware, compose, createStore } from "redux";
import reducers, { rootSaga } from "../modules";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState?: any) {
	const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));

	var rootTask = sagaMiddleware.run(rootSaga);
	if (!rootTask.isRunning()) {
		console.error("Saga Failed to Run - ", rootTask.error());
	}
	
	return store;
}
