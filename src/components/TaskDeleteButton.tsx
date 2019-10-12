import { todoActions } from "../appRedux/modules/todos";
import { FilterType } from "../appRedux/modules/todos/types";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { FC } from "react";
import { Tooltip, Icon } from "antd";

const { deleteTodoItem, fetchTodos } = todoActions;

interface IProps {
	filterType: FilterType;
	item: TodoItem;
	deleteTodoItem: typeof deleteTodoItem;
	fetchTodos: typeof fetchTodos;
}

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

export default DeleteTask;
