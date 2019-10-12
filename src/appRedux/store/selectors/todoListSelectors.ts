import { createSelector } from "reselect";
import { todoActions } from "../../modules/todos";
import ApplicationState from "../../types";
import { TodoItem } from "../../../autorestClients/TodoList/TodoList.Client/models";
import { TodoManagement } from "../../modules/todos/types";

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
	public static todoSelected = ({ todos }: ApplicationState) => todos;

	static todoListSelectors() {
		return createSelector(
			this.todoSelected,
			(todos): ITodoListSelectorProps => {
				return { ...todos };
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

	public static todoListingSelectors() {
		return createSelector(
			this.todoSelected,
			(todos): ITodoListingSelectorProps => {
				return { todos };
			}
		);
	}

	static todoListingDispatchers(): ITodoListingDispatchers {
		return {
			fetchTodos,
			deleteTodoItem,
			updateTodoItem,
			selectTodo,
			updateStatusTodoItem
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

type ITodoListingSelectorProps = {
	todos: TodoManagement;
};

type ITodoListingDispatchers = {
	fetchTodos: typeof fetchTodos;
	deleteTodoItem: typeof deleteTodoItem;
	updateTodoItem: typeof updateTodoItem;
	selectTodo: typeof selectTodo;
	updateStatusTodoItem: typeof updateStatusTodoItem;
};

export type ITodoListingStateProps = ITodoListingSelectorProps & ITodoListingDispatchers;
