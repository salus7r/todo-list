import { todoActions } from "../appRedux/modules/todos";
import { FilterType } from "../appRedux/modules/todos/types";
import { TodoItem, UpdateTodoItemReq } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { Component, Fragment } from "react";
import { Tooltip, Button } from "antd";
import ViewEditTaskFormModal from "./AddEditTodoItemModal";
import Utils from "../utils/Utils";

const { updateTodoItem, fetchTodos } = todoActions;

interface IProps {
	filterType: FilterType;
	item: TodoItem;
	updateTodoItem: typeof updateTodoItem;
	fetchTodos: typeof fetchTodos;
}

class ViewEditTask extends Component<IProps> {
	private formRef: any;

	state = {
		visible: false
	};

	showModal = () => {
		this.setState({ visible: true });
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	handleUpdate = () => {
		const { form } = this.formRef.props;
		const { updateTodoItem, filterType, item } = this.props;

		form.validateFields((err, values: UpdateTodoItemReq) => {
			if (err) {
				return;
			}

			values.id = item.id;
			values.dueDate = !!values.dueDate ? new Date(values.dueDate) : null;

			updateTodoItem(values);
			setTimeout(function() {
				Utils.openNotification("success", "Task Updated", "Task Updated Successfully");
				fetchTodos(filterType);
			}, 500);
			form.resetFields();
			this.setState({ visible: false });
		});
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};

	render() {
		const { item } = this.props;

		return (
			<Fragment>
				<Tooltip title="Edit Task">
					<Button type="primary" size={"small"} onClick={this.showModal}>
						Edit
					</Button>
				</Tooltip>
				<ViewEditTaskFormModal
					wrappedComponentRef={this.saveFormRef}
					visible={this.state.visible}
					onCancel={this.handleCancel}
					onUpdate={this.handleUpdate}
					itemData={item}
				/>
			</Fragment>
		);
	}
}

export default ViewEditTask;
