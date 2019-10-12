import { todoActions } from "../appRedux/modules/todos";
import { FilterType } from "../appRedux/modules/todos/types";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import React, { Component, Fragment } from "react";
import { Tooltip, Button, Form, Modal, Input, Radio } from "antd";
import { FormComponentProps } from "antd/lib/form";
const { deleteTodoItem, updateStatusTodoItem, fetchTodos } = todoActions;

interface IProps {
	filterType: FilterType;
	item: TodoItem;
	deleteTodoItem: typeof deleteTodoItem;
	updateStatusTodoItem: typeof updateStatusTodoItem;
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

	handleCreate = () => {
		const { form } = this.formRef.props;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			console.log("Received values of form: ", values);
			form.resetFields();
			this.setState({ visible: false });
		});
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};

	render() {
		const { item, fetchTodos, filterType } = this.props;

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
					onCreate={this.handleCreate}
				/>
			</Fragment>
		);
	}
}

interface IViewEditTaskFormProps extends FormComponentProps {
	visible: boolean;
	onCancel: () => void;
	onCreate: () => void;
}

const ViewEditTaskForm = Form.create<IViewEditTaskFormProps>({ name: "form_in_modal" })(
	// eslint-disable-next-line
	class extends React.Component<IViewEditTaskFormProps> {
		render() {
			const { visible, onCancel, onCreate, form } = this.props;
			const { getFieldDecorator } = form;
			return (
				<Modal visible={visible} title="Create a new collection" okText="Create" onCancel={onCancel} onOk={onCreate}>
					<Form layout="vertical">
						<Form.Item label="Title">
							{getFieldDecorator("title", {
								rules: [{ required: true, message: "Please input the title of collection!" }]
							})(<Input />)}
						</Form.Item>
						<Form.Item label="Description">{getFieldDecorator("description")(<Input type="textarea" />)}</Form.Item>
						<Form.Item className="collection-create-form_last-form-item">
							{getFieldDecorator("modifier", {
								initialValue: "public"
							})(
								<Radio.Group>
									<Radio value="public">Public</Radio>
									<Radio value="private">Private</Radio>
								</Radio.Group>
							)}
						</Form.Item>
					</Form>
				</Modal>
			);
		}
	}
);

export default ViewEditTask;
