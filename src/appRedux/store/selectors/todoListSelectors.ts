import { createSelector } from "reselect";
import { todoActions } from "../../modules/todos";
import ApplicationState from "../../types";
import { TodoItem } from "../../../autorestClients/TodoList/TodoList.Client/models";

const {
	fetchTodos,
	addTodoTaskItem,
	clearTodos,
	addTodoItem,
	deleteTodoItem,
	deleteTodoTaskItem,
	selectTodo,
	setTodos,
	updateStatusTodoItem,
	updateStatusTodoTaskItem,
	updateTodoItem,
	updateTodoTaskItem
} = todoActions;

export default class TodoListSelectors {
	public static todoSelected = ({ todo }: ApplicationState) => todo;

	static todoListSelectors() {
		return createSelector(
			this.todoSelected,
			(todo): ITodoListSelectorProps => {
				return { ...todo };
			}
		);
	}

	static todoListDispatchers(): ITodoListDispatchers {
		return {
			fetchTodos,
			addTodoTaskItem,
			clearTodos,
			addTodoItem,
			deleteTodoItem,
			deleteTodoTaskItem,
			selectTodo,
			setTodos,
			updateStatusTodoItem,
			updateStatusTodoTaskItem,
			updateTodoItem,
			updateTodoTaskItem
		};
	}
}

type ITodoListSelectorProps = {
	loading: boolean;
	todoList: Array<TodoItem>;
	todoItemSelected: TodoItem;
};

type ITodoListDispatchers = {
	fetchTodos: typeof fetchTodos;
	addTodoTaskItem: typeof addTodoTaskItem;
	clearTodos: typeof clearTodos;
	addTodoItem: typeof addTodoItem;
	deleteTodoItem: typeof deleteTodoItem;
	deleteTodoTaskItem: typeof deleteTodoTaskItem;
	selectTodo: typeof selectTodo;
	setTodos: typeof setTodos;
	updateStatusTodoItem: typeof updateStatusTodoItem;
	updateStatusTodoTaskItem: typeof updateStatusTodoTaskItem;
	updateTodoItem: typeof updateTodoItem;
	updateTodoTaskItem: typeof updateTodoTaskItem;
};

export type ITodoListStateProps = ITodoListSelectorProps & ITodoListDispatchers;
