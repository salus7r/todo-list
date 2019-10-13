import React from "react";
import { Form, Modal, Input, DatePicker, Radio } from "antd";
import moment from "moment";
import { StatusType } from "../appRedux/modules/todos/types";
import { FormComponentProps } from "antd/lib/form";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import TasksList from "./TasksList";
import _ from "lodash";

interface IViewEditTaskFormProps extends FormComponentProps {
	itemData: TodoItem;
	visible: boolean;
	onCancel: () => void;
	onUpdate: () => void;
}

const ViewEditTaskModal = Form.create<IViewEditTaskFormProps>({ name: "form_in_modal" })(
	// eslint-disable-next-line
	class extends React.Component<IViewEditTaskFormProps> {
		render() {
			const { visible, onCancel, onUpdate, form, itemData } = this.props;
			const { getFieldDecorator } = form;
			const subTasks = !_.isNull(itemData.subTasks) && !_.isUndefined(itemData.subTasks) ? itemData.subTasks : [];

			const dateFormat = "YYYY/MM/DD";

			return (
				<Modal width={900} visible={visible} title="View / Edit Task" okText="Update" onCancel={onCancel} onOk={onUpdate}>
					<Form layout="vertical" className={"margin-bottom-20x"}>
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
							{getFieldDecorator("dueDate", {
								initialValue: !!itemData.dueDate ? moment(new Date(itemData.dueDate), dateFormat) : null
							})(<DatePicker format={dateFormat} />)}
						</Form.Item>
						<Form.Item label="Status">
							{getFieldDecorator("status", {
								initialValue: itemData.status
							})(
								<Radio.Group buttonStyle="solid">
									<Radio.Button value={StatusType.Active}>Active</Radio.Button>
									<Radio.Button value={StatusType.Completed}>Completed</Radio.Button>
								</Radio.Group>
							)}
						</Form.Item>
					</Form>
					<TasksList subTasks={subTasks} todoItemId={itemData.id} />
				</Modal>
			);
		}
	}
);

export default ViewEditTaskModal;
