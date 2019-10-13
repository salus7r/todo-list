import { FilterType, StatusType } from "../appRedux/modules/todos/types";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { FC } from "react";
import { Tooltip, Icon } from "antd";
import { todoActions } from "../appRedux/modules/todos";
import Utils from "../utils/Utils";

const { updateStatusTodoItem, fetchTodos } = todoActions;

interface IProps {
	filterType: FilterType;
	item: TodoItem;
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
			Utils.openNotification("success", "Marked Active", "Task Marked as Active Successfully");
		}, 500);
	}

	return (
		<Tooltip title="Mark Active">
			<Icon type="minus-circle" theme="twoTone" style={{ fontSize: "20px" }} onClick={activeTask} />
		</Tooltip>
	);
};

export default TaskActive;
