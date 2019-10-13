import { FilterType, StatusType } from "../appRedux/modules/todos/types";
import { TodoItem, TaskItem } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { FC } from "react";
import { Tooltip, Icon } from "antd";
import { todoActions } from "../appRedux/modules/todos";
import Utils from "../utils/Utils";

const { updateStatusTodoItem, fetchTodos, updateStatusTodoTaskItem } = todoActions;

interface IProps {
	filterType?: FilterType;
	isTask?: boolean;
	todoItemId?: string;
	item: TodoItem | TaskItem;

	updateStatusTodoTaskItem?: typeof updateStatusTodoTaskItem;
	updateStatusTodoItem?: typeof updateStatusTodoItem;
	fetchTodos?: typeof fetchTodos;
}

const TaskActive: FC<IProps> = props => {
	const { updateStatusTodoItem, item, fetchTodos, filterType, todoItemId, isTask } = props;

	function activeTask() {
		if (isTask) {
			updateStatusTodoTaskItem({ todoItemId: todoItemId, taskItemId: item.id, status: StatusType.Active });
		} else {
			updateStatusTodoItem({ id: item.id, status: StatusType.Active });
			setTimeout(function() {
				if (filterType !== FilterType.All) {
					fetchTodos(filterType);
				}
			}, 500);
		}
		Utils.openNotification("success", "Marked Active", "Task Marked as Active Successfully");
	}

	return (
		<Tooltip title="Mark Active">
			<Icon type="minus-circle" theme="twoTone" style={{ fontSize: "20px" }} onClick={activeTask} />
		</Tooltip>
	);
};

export default TaskActive;
