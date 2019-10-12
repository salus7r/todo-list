import React, { FC } from "react";
import { List, Icon, Tooltip, Button } from "antd";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import { StatusType, FilterType } from "../appRedux/modules/todos/types";
import { todoActions } from "../appRedux/modules/todos";

const { deleteTodoItem, updateStatusTodoItem, fetchTodos } = todoActions;

interface IProps {
	filterType: FilterType;
	item: TodoItem;
	deleteTodoItem: typeof deleteTodoItem;
	updateStatusTodoItem: typeof updateStatusTodoItem;
	fetchTodos: typeof fetchTodos;
}

const TaskActive: FC<IProps> = props => {
	const { updateStatusTodoItem, item, fetchTodos, filterType } = props;

	function activeTask() {
		updateStatusTodoItem({ id: item.id, status: StatusType.Active });
		setTimeout(function() {
			if (filterType !== FilterType.All) {
				fetchTodos(filterType);
			}
		}, 500);
	}

	return (
		<Tooltip title="Mark Active">
			<Icon type="minus-circle" theme="twoTone" style={{ fontSize: "20px" }} onClick={activeTask} />
		</Tooltip>
	);
};

const TaskComplete: FC<IProps> = props => {
	const { item, updateStatusTodoItem, fetchTodos, filterType } = props;

	function completeTask() {
		updateStatusTodoItem({ id: item.id, status: StatusType.Completed });
		setTimeout(function() {
			if (filterType !== FilterType.All) {
				fetchTodos(filterType);
			}
		}, 500);
	}

	return (
		<Tooltip title="Mark Complete">
			<Icon type="check-circle" theme="twoTone" style={{ fontSize: "20px" }} twoToneColor="#52c41a" onClick={completeTask} />
		</Tooltip>
	);
};

const DeleteTask: FC<IProps> = props => {
	const { deleteTodoItem, item, fetchTodos, filterType } = props;

	function deleteTask() {
		deleteTodoItem({ id: item.id });
		setTimeout(function() {
			if (filterType !== FilterType.All) {
				fetchTodos(filterType);
			}
		}, 500);
	}

	return (
		<Tooltip title="Delete Task">
			<Icon type="delete" theme="twoTone" twoToneColor="#eb2f96" onClick={deleteTask} />
		</Tooltip>
	);
};

const ViewEditTask: FC<IProps> = props => {
	const { item, fetchTodos, filterType } = props;

	return (
		<Tooltip title="Edit Task">
			<Button type="primary" size={"small"}>
				Edit
			</Button>
		</Tooltip>
	);
};

const App: FC<IProps> = props => {
	const { item } = props;

	return (
		<List.Item
			className={item.status === StatusType.Completed && "text-line-though"}
			actions={[
				item.status === StatusType.Completed ? <TaskActive {...props} /> : <TaskComplete {...props} />,
				<DeleteTask {...props} />,
				<ViewEditTask {...props} />
			]}
		>
			{item.title}
		</List.Item>
	);
};

export default App;
