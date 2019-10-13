import { todoActions } from "../appRedux/modules/todos";
import { FilterType, StatusType } from "../appRedux/modules/todos/types";
import { TodoItem, TaskItem } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { FC } from "react";
import { Tooltip, Icon } from "antd";
import Utils from "../utils/Utils";

const { updateStatusTodoItem, fetchTodos, updateStatusTodoTaskItem } = todoActions;

interface IProps {
	filterType?: FilterType;
	isTask?: boolean;
	item: TodoItem | TaskItem;

	updateStatusTodoTaskItem?: typeof updateStatusTodoTaskItem;
	updateStatusTodoItem?: typeof updateStatusTodoItem;
	fetchTodos?: typeof fetchTodos;
}

const TaskComplete: FC<IProps> = props => {
	const { item, updateStatusTodoItem, fetchTodos, filterType } = props;

	function completeTask() {
		updateStatusTodoItem({ id: item.id, status: StatusType.Completed });
		setTimeout(function() {
			if (filterType !== FilterType.All) {
				fetchTodos(filterType);
			}
			Utils.openNotification("success", "Marked Completed", "Task Marked as Completed Successfully");
		}, 500);
	}

	return (
		<Tooltip title="Mark Complete">
			<Icon type="check-circle" theme="twoTone" style={{ fontSize: "20px" }} twoToneColor="#52c41a" onClick={completeTask} />
		</Tooltip>
	);
};

export default TaskComplete;
