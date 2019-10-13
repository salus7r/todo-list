import React, { FC } from "react";
import { List, Row, Col, Tag } from "antd";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import { StatusType, FilterType } from "../appRedux/modules/todos/types";
import { todoActions } from "../appRedux/modules/todos";
import TaskActive from "./TaskActiveButton";
import TaskComplete from "./TaskCompleteButton";
import DeleteTask from "./TaskDeleteButton";
import ViewEditTask from "./ViewEditTaskButton";
import _ from "lodash";

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
	const dueDate = !!item.dueDate ? item.dueDate.toDateString() : "";
	const strikeThroughClass = item.status === StatusType.Completed ? "text-line-though" : "";

	return (
		<List.Item
			actions={[
				item.status === StatusType.Completed ? <TaskActive {...props} /> : <TaskComplete {...props} />,
				<DeleteTask {...props} />,
				<ViewEditTask {...props} />
			]}
		>
			<Row className="width-100">
				<Col span={12} className={strikeThroughClass}>
					{item.title}
				</Col>
				<Col span={12}>
					{!_.isEmpty(dueDate) && (
						<Tag color="blue" className={"float-right margin-right-20px"}>
							<div className={strikeThroughClass}>{dueDate}</div>
						</Tag>
					)}
				</Col>
			</Row>
		</List.Item>
	);
};

export default App;
