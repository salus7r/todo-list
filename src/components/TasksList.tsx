import React, { Component, Fragment } from "react";
import { List } from "antd";
import { connect } from "react-redux";
import TodoListSelectors, { ITaskListingStateProps } from "../appRedux/store/selectors/todoListSelectors";
import ListItem from "./ListItem";
import ApplicationState from "../appRedux/types";
import Utils from "../utils/Utils";
import TaskListItem from "./TaskListItem";

interface IProps extends ITaskListingStateProps {}

interface IState {}

class TasksList extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		const { subTasks, deleteTodoTaskItem, updateTodoTaskItem, updateStatusTodoTaskItem } = this.props;

		return (
			<Fragment>
				<List
					style={{ textAlign: "left" }}
					header={<h3>Sub Tasks</h3>}
					bordered
					dataSource={subTasks}
					renderItem={item => (
						<TaskListItem
							key={item.id}
							deleteTodoTaskItem={deleteTodoTaskItem}
							updateTodoTaskItem={updateTodoTaskItem}
							updateStatusTodoTaskItem={updateStatusTodoTaskItem}
							item={item}
						/>
					)}
				/>
			</Fragment>
		);
	}
}

export default connect(
	null,
	TodoListSelectors.taskListingDispatchers()
)(TasksList);
