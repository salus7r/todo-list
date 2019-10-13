import { todoActions } from "../appRedux/modules/todos";
import { FilterType } from "../appRedux/modules/todos/types";
import { TodoItem, TaskItem } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { FC } from "react";
import { Tooltip, Icon } from "antd";
import Utils from "../utils/Utils";

const { deleteTodoItem, fetchTodos, deleteTodoTaskItem } = todoActions;

interface IProps {
	filterType?: FilterType;
	isTask?: boolean;
	item: TodoItem | TaskItem;

	deleteTodoTaskItem?: typeof deleteTodoTaskItem;
	deleteTodoItem?: typeof deleteTodoItem;
	fetchTodos?: typeof fetchTodos;
}

const DeleteTask: FC<IProps> = props => {
	const { deleteTodoItem, item, fetchTodos, filterType } = props;

	function deleteTask() {
		deleteTodoItem({ id: item.id });
		setTimeout(function() {
			if (filterType !== FilterType.All) {
				fetchTodos(filterType);
			}
			Utils.openNotification("success", "Task Deleted", "Task Deleted Successfully");
		}, 500);
	}

	return (
		<Tooltip title="Delete Task">
			<Icon type="delete" theme="twoTone" twoToneColor="#eb2f96" onClick={deleteTask} />
		</Tooltip>
	);
};

export default DeleteTask;
