import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { FormComponentProps } from "antd/es/form";
import { todoActions } from "../appRedux/modules/todos";
import { AddTodoItemReq } from "../autorestClients/TodoList/TodoList.Client/models";
import { StatusType } from "../appRedux/modules/todos/types";

const { addTodoItem } = todoActions;

interface IProps extends FormComponentProps {
	loading: boolean;
	addTodoItem: typeof addTodoItem;
}

class AddTodoItemForm extends Component<IProps> {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values: AddTodoItemReq) => {
			if (!err) {
				values.status = StatusType.Active;

				this.props.addTodoItem(values);
				this.props.form.resetFields();
			}
		});
	};

	render() {
		const { form, loading } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Form layout={"inline"} onSubmit={this.handleSubmit} className="add-task-form">
				<Form.Item>
					{getFieldDecorator("title", {
						rules: [{ required: true, message: "Title is required in order to create a task" }]
					})(<Input placeholder="What is on your mind?" style={{ width: "500px" }} autoFocus={true} />)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="add-task-form-button" disabled={loading}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create<IProps>({ name: "add_todo_item" })(AddTodoItemForm);
