import { todoActions } from "../appRedux/modules/todos";
import { FilterType, StatusType } from "../appRedux/modules/todos/types";
import { TodoItem, UpdateTodoItemReq } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { Component, Fragment } from "react";
import { Tooltip, Button, Form, Modal, Input, Radio, DatePicker } from "antd";
import { FormComponentProps } from "antd/lib/form";
import moment from "moment";
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
				<ViewEditTaskForm
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

interface IViewEditTaskFormProps extends FormComponentProps {
	itemData: TodoItem;
	visible: boolean;
	onCancel: () => void;
	onUpdate: () => void;
}

const ViewEditTaskForm = Form.create<IViewEditTaskFormProps>({ name: "form_in_modal" })(
	// eslint-disable-next-line
	class extends React.Component<IViewEditTaskFormProps> {
		render() {
			const { visible, onCancel, onUpdate, form, itemData } = this.props;
			const { getFieldDecorator } = form;

			const dateFormat = "YYYY/MM/DD";

			return (
				<Modal width={800} visible={visible} title="View / Edit Task" okText="Update" onCancel={onCancel} onOk={onUpdate}>
					<Form layout="vertical">
						<Form.Item label="Title">
							{getFieldDecorator("title", {
								rules: [{ required: true, message: "Please input the title of collection!" }],
								initialValue: itemData.title
							})(<Input autoFocus />)}
						</Form.Item>
						<Form.Item label="Description">
							{getFieldDecorator("description", {
								initialValue: itemData.description
							})(<Input type="textarea" />)}
						</Form.Item>
						<Form.Item label="DueDate">
							<DatePicker
								id="dueDate"
								defaultValue={moment(!!itemData.dueDate ? new Date(itemData.dueDate) : new Date(), dateFormat)}
								format={dateFormat}
							/>
						</Form.Item>
						<Form.Item label="status">
							<Radio.Group id={"status"} defaultValue={itemData.status} buttonStyle="solid">
								<Radio.Button value={StatusType.Active}>Active</Radio.Button>
								<Radio.Button value={StatusType.Completed}>Completed</Radio.Button>
							</Radio.Group>
						</Form.Item>
					</Form>
				</Modal>
			);
		}
	}
);

export default ViewEditTask;
