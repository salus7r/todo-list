import { initialState, TodosReducer } from "./reducers";
import todoSagas from "./sagas";

import { createActionCreators, createReducerFunction } from "immer-reducer";

//FirstTimeSetup Reducer combined
const todosReducer = createReducerFunction(TodosReducer, initialState);

//Individual reducer actions
const todoActions = createActionCreators(TodosReducer);

export { todoActions, todoSagas };

export default todosReducer;
