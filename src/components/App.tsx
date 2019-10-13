import React from "react";
import { connect } from "react-redux";
import TodoListSelectors, { ITodoListStateProps } from "../appRedux/store/selectors/todoListSelectors";
import AddTodoItemForm from "./AddTodoItemForm";
import TasksList from "./TasksList";

import "antd/dist/antd.css";
import "../styles/App.css";

interface IProps extends ITodoListStateProps {}

const App: React.FC<IProps> = props => {
	const { loading, apiError, addTodoItem } = props;

	return (
		<div className="App">
			<h1>Todo List</h1>
			<AddTodoItemForm loading={loading} addTodoItem={addTodoItem} apiError={apiError} />
			<TasksList />
		</div>
	);
};

export default connect(
	TodoListSelectors.todoListSelectors(),
	TodoListSelectors.todoListDispatchers()
)(App);
