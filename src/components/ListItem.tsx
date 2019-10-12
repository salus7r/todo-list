import React, { FC } from "react";
import { List } from "antd";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import { StatusType, FilterType } from "../appRedux/modules/todos/types";
import { todoActions } from "../appRedux/modules/todos";
import TaskActive from "./TaskActiveButton";
import TaskComplete from "./TaskCompleteButton";
import DeleteTask from "./TaskDeleteButton";
import ViewEditTask from "./ViewEditTaskButton";

const { deleteTodoItem, updateTodoItem, updateStatusTodoItem, fetchTodos } = todoActions;

interface IProps {
	filterType: FilterType;
	item: TodoItem;
	deleteTodoItem: typeof deleteTodoItem;
	updateTodoItem: typeof updateTodoItem;
	updateStatusTodoItem: typeof updateStatusTodoItem;
	fetchTodos: typeof fetchTodos;
}

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
