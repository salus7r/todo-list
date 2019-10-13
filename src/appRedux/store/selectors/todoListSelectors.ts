import { createSelector } from "reselect";
import { todoActions } from "../../modules/todos";
import ApplicationState from "../../types";
import { TodoItem, TaskItem } from "../../../autorestClients/TodoList/TodoList.Client/models";
import { TodoManagement } from "../../modules/todos/types";

const {
	fetchTodos,
	addTodoTaskItem,
	clearTodos,
	addTodoItem,
	deleteTodoItem,
	deleteTodoTaskItem,
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
			updateStatusTodoItem
		};
	}

	static taskListingDispatchers(): ITaskListingDispatchers {
		return {
			deleteTodoTaskItem,
			updateTodoTaskItem,
			updateStatusTodoTaskItem
		};
	}
}

type ITodoListSelectorProps = {
	loading: boolean;
	todoList: Array<TodoItem>;
	apiError: boolean;
};

type ITodoListDispatchers = {
	fetchTodos: typeof fetchTodos;
	addTodoTaskItem: typeof addTodoTaskItem;
	clearTodos: typeof clearTodos;
	addTodoItem: typeof addTodoItem;
	deleteTodoItem: typeof deleteTodoItem;
	deleteTodoTaskItem: typeof deleteTodoTaskItem;
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
	updateStatusTodoItem: typeof updateStatusTodoItem;
};

export type ITodoListingStateProps = ITodoListingSelectorProps & ITodoListingDispatchers;

type ITaskListingSelectorProps = {
	subTasks: TaskItem[];
};

type ITaskListingDispatchers = {
	deleteTodoTaskItem: typeof deleteTodoTaskItem;
	updateTodoTaskItem: typeof updateTodoTaskItem;
	updateStatusTodoTaskItem: typeof updateStatusTodoTaskItem;
};

export type ITaskListingStateProps = ITaskListingSelectorProps & ITaskListingDispatchers;
