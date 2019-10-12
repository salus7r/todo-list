import React, { Component, Fragment } from "react";
import { List, Spin, Radio } from "antd";
import { TodoItem } from "../autorestClients/TodoList/TodoList.Client/models";
import { todoActions } from "../appRedux/modules/todos";
import _ from "lodash";
import { FilterType } from "../appRedux/modules/todos/types";
import { connect } from "react-redux";
import TodoListSelectors, { ITodoListingStateProps } from "../appRedux/store/selectors/todoListSelectors";
import ListItem from "./ListItem";
import ApplicationState from "../appRedux/types";

interface IProps extends ITodoListingStateProps {}

interface IState {
	filterType: FilterType;
}

class TasksList extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			filterType: FilterType.All
		};
	}

	componentDidMount() {
		this.fetchTodoList();
	}

	setFilterType = (filterType: FilterType) => {
		this.setState({ filterType }, () => {
			this.fetchTodoList();
		});
	};

	fetchTodoList = () => {
		this.props.fetchTodos(this.state.filterType);
	};

	onFilterChange = (e: any) => {
		this.setFilterType(e.target.value);
	};

	render() {
		const { todos, deleteTodoItem, updateTodoItem, updateStatusTodoItem, fetchTodos } = this.props;
		const { filterType } = this.state;
		const { loading, todoList } = todos;

		return (
			<Fragment>
				<Radio.Group defaultValue={filterType} buttonStyle="solid" onChange={this.onFilterChange} className={"margin-bottom-20px"}>
					<Radio.Button value={FilterType.All}>All</Radio.Button>
					<Radio.Button value={FilterType.Active}>Active</Radio.Button>
					<Radio.Button value={FilterType.Completed}>Completed</Radio.Button>
				</Radio.Group>
				<Spin spinning={loading}>
					<List
						style={{ textAlign: "left" }}
						bordered
						dataSource={todoList}
						renderItem={item => (
							<ListItem
								key={item.id}
								filterType={filterType}
								fetchTodos={fetchTodos}
								deleteTodoItem={deleteTodoItem}
								updateTodoItem={updateTodoItem}
								updateStatusTodoItem={updateStatusTodoItem}
								item={item}
							/>
						)}
					/>
				</Spin>
			</Fragment>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => {
	const { todos } = state;
	return { todos };
};

export default connect(
	mapStateToProps,
	TodoListSelectors.todoListingDispatchers()
)(TasksList);
