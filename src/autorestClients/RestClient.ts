import { TodoListAPI } from "./TodoList/TodoList.Client/todoListAPI";

class RestClient {
	public _todoClient: TodoListAPI;

	constructor() {
		var baseUri = "https://todoappapis.azurewebsites.net";

		if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
			baseUri = "https://localhost:44329";
		}

		this._todoClient = new TodoListAPI({ baseUri });
	}
}

export default new RestClient();
