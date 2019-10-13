import React, { FC } from "react";
import { List, Row, Col, Tag } from "antd";
import { TaskItem } from "../autorestClients/TodoList/TodoList.Client/models";
import { StatusType } from "../appRedux/modules/todos/types";
import { todoActions } from "../appRedux/modules/todos";
import TaskActive from "./TaskActiveButton";
import TaskComplete from "./TaskCompleteButton";
import DeleteTask from "./TaskDeleteButton";
import _ from "lodash";

const { deleteTodoTaskItem, updateTodoTaskItem, updateStatusTodoTaskItem } = todoActions;

interface IProps {
	item: TaskItem;
	deleteTodoTaskItem: typeof deleteTodoTaskItem;
	updateTodoTaskItem: typeof updateTodoTaskItem;
	updateStatusTodoTaskItem: typeof updateStatusTodoTaskItem;
}

const TaskListItem: FC<IProps> = props => {
	const { item } = props;
	const strikeThroughClass = item.status === StatusType.Completed ? "text-line-though" : "";

	return (
		<List.Item
			actions={[
				item.status === StatusType.Completed ? <TaskActive {...props} isTask={true} /> : <TaskComplete {...props} isTask={true} />,
				<DeleteTask {...props} isTask={true} />
			]}
		>
			<Row className="width-100">
				<Col span={24} className={strikeThroughClass}>
					{item.title}
				</Col>
			</Row>
		</List.Item>
	);
};

export default TaskListItem;
