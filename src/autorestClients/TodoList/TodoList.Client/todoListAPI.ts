/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { TodoListAPIContext } from "./todoListAPIContext";

class TodoListAPI extends TodoListAPIContext {
  /**
   * Initializes a new instance of the TodoListAPI class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.TodoListAPIOptions) {
    super(options);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.GetTodoListResponse>
   */
  getTodoList(options?: Models.TodoListAPIGetTodoListOptionalParams): Promise<Models.GetTodoListResponse>;
  /**
   * @param callback The callback
   */
  getTodoList(callback: msRest.ServiceCallback<Models.TodoItem[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getTodoList(options: Models.TodoListAPIGetTodoListOptionalParams, callback: msRest.ServiceCallback<Models.TodoItem[]>): void;
  getTodoList(options?: Models.TodoListAPIGetTodoListOptionalParams | msRest.ServiceCallback<Models.TodoItem[]>, callback?: msRest.ServiceCallback<Models.TodoItem[]>): Promise<Models.GetTodoListResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getTodoListOperationSpec,
      callback) as Promise<Models.GetTodoListResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.AddTodoItemResponse>
   */
  addTodoItem(options?: Models.TodoListAPIAddTodoItemOptionalParams): Promise<Models.AddTodoItemResponse>;
  /**
   * @param callback The callback
   */
  addTodoItem(callback: msRest.ServiceCallback<Models.TodoItem>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  addTodoItem(options: Models.TodoListAPIAddTodoItemOptionalParams, callback: msRest.ServiceCallback<Models.TodoItem>): void;
  addTodoItem(options?: Models.TodoListAPIAddTodoItemOptionalParams | msRest.ServiceCallback<Models.TodoItem>, callback?: msRest.ServiceCallback<Models.TodoItem>): Promise<Models.AddTodoItemResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      addTodoItemOperationSpec,
      callback) as Promise<Models.AddTodoItemResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdateTodoItemResponse>
   */
  updateTodoItem(options?: Models.TodoListAPIUpdateTodoItemOptionalParams): Promise<Models.UpdateTodoItemResponse>;
  /**
   * @param callback The callback
   */
  updateTodoItem(callback: msRest.ServiceCallback<Models.TodoItem>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTodoItem(options: Models.TodoListAPIUpdateTodoItemOptionalParams, callback: msRest.ServiceCallback<Models.TodoItem>): void;
  updateTodoItem(options?: Models.TodoListAPIUpdateTodoItemOptionalParams | msRest.ServiceCallback<Models.TodoItem>, callback?: msRest.ServiceCallback<Models.TodoItem>): Promise<Models.UpdateTodoItemResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updateTodoItemOperationSpec,
      callback) as Promise<Models.UpdateTodoItemResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdateTodoItemStatusResponse>
   */
  updateTodoItemStatus(options?: Models.TodoListAPIUpdateTodoItemStatusOptionalParams): Promise<Models.UpdateTodoItemStatusResponse>;
  /**
   * @param callback The callback
   */
  updateTodoItemStatus(callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTodoItemStatus(options: Models.TodoListAPIUpdateTodoItemStatusOptionalParams, callback: msRest.ServiceCallback<boolean>): void;
  updateTodoItemStatus(options?: Models.TodoListAPIUpdateTodoItemStatusOptionalParams | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.UpdateTodoItemStatusResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updateTodoItemStatusOperationSpec,
      callback) as Promise<Models.UpdateTodoItemStatusResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DeleteTodoItemResponse>
   */
  deleteTodoItem(options?: Models.TodoListAPIDeleteTodoItemOptionalParams): Promise<Models.DeleteTodoItemResponse>;
  /**
   * @param callback The callback
   */
  deleteTodoItem(callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteTodoItem(options: Models.TodoListAPIDeleteTodoItemOptionalParams, callback: msRest.ServiceCallback<boolean>): void;
  deleteTodoItem(options?: Models.TodoListAPIDeleteTodoItemOptionalParams | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.DeleteTodoItemResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      deleteTodoItemOperationSpec,
      callback) as Promise<Models.DeleteTodoItemResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.AddTaskItemResponse>
   */
  addTaskItem(options?: Models.TodoListAPIAddTaskItemOptionalParams): Promise<Models.AddTaskItemResponse>;
  /**
   * @param callback The callback
   */
  addTaskItem(callback: msRest.ServiceCallback<Models.TaskItem>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  addTaskItem(options: Models.TodoListAPIAddTaskItemOptionalParams, callback: msRest.ServiceCallback<Models.TaskItem>): void;
  addTaskItem(options?: Models.TodoListAPIAddTaskItemOptionalParams | msRest.ServiceCallback<Models.TaskItem>, callback?: msRest.ServiceCallback<Models.TaskItem>): Promise<Models.AddTaskItemResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      addTaskItemOperationSpec,
      callback) as Promise<Models.AddTaskItemResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdateTaskItemResponse>
   */
  updateTaskItem(options?: Models.TodoListAPIUpdateTaskItemOptionalParams): Promise<Models.UpdateTaskItemResponse>;
  /**
   * @param callback The callback
   */
  updateTaskItem(callback: msRest.ServiceCallback<Models.TaskItem>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTaskItem(options: Models.TodoListAPIUpdateTaskItemOptionalParams, callback: msRest.ServiceCallback<Models.TaskItem>): void;
  updateTaskItem(options?: Models.TodoListAPIUpdateTaskItemOptionalParams | msRest.ServiceCallback<Models.TaskItem>, callback?: msRest.ServiceCallback<Models.TaskItem>): Promise<Models.UpdateTaskItemResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updateTaskItemOperationSpec,
      callback) as Promise<Models.UpdateTaskItemResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdateTaskItemStatusResponse>
   */
  updateTaskItemStatus(options?: Models.TodoListAPIUpdateTaskItemStatusOptionalParams): Promise<Models.UpdateTaskItemStatusResponse>;
  /**
   * @param callback The callback
   */
  updateTaskItemStatus(callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTaskItemStatus(options: Models.TodoListAPIUpdateTaskItemStatusOptionalParams, callback: msRest.ServiceCallback<boolean>): void;
  updateTaskItemStatus(options?: Models.TodoListAPIUpdateTaskItemStatusOptionalParams | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.UpdateTaskItemStatusResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updateTaskItemStatusOperationSpec,
      callback) as Promise<Models.UpdateTaskItemStatusResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DeleteTaskItemResponse>
   */
  deleteTaskItem(options?: Models.TodoListAPIDeleteTaskItemOptionalParams): Promise<Models.DeleteTaskItemResponse>;
  /**
   * @param callback The callback
   */
  deleteTaskItem(callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteTaskItem(options: Models.TodoListAPIDeleteTaskItemOptionalParams, callback: msRest.ServiceCallback<boolean>): void;
  deleteTaskItem(options?: Models.TodoListAPIDeleteTaskItemOptionalParams | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.DeleteTaskItemResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      deleteTaskItemOperationSpec,
      callback) as Promise<Models.DeleteTaskItemResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getTodoListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "TodoApp",
  queryParameters: [
    Parameters.filterType
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TodoItem"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const addTodoItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "TodoApp/AddTodoItem",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.AddTodoItemReq
  },
  responses: {
    200: {
      bodyMapper: Mappers.TodoItem
    },
    default: {}
  },
  serializer
};

const updateTodoItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "TodoApp/UpdateTodoItem",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.UpdateTodoItemReq
  },
  responses: {
    200: {
      bodyMapper: Mappers.TodoItem
    },
    default: {}
  },
  serializer
};

const updateTodoItemStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "TodoApp/UpdateTodoItemStatus",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.UpdateTodoItemStatusReq
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};

const deleteTodoItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "TodoApp/DeleteTodoItem",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.DeleteTodoItemReq
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};

const addTaskItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "TodoApp/AddTaskItem",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.AddTaskItemReq
  },
  responses: {
    200: {
      bodyMapper: Mappers.TaskItem
    },
    default: {}
  },
  serializer
};

const updateTaskItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "TodoApp/UpdateTaskItem",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.UpdateTaskItemReq
  },
  responses: {
    200: {
      bodyMapper: Mappers.TaskItem
    },
    default: {}
  },
  serializer
};

const updateTaskItemStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "TodoApp/UpdateTaskItemStatus",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.UpdateTaskItemStatusReq
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};

const deleteTaskItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "TodoApp/DeleteTaskItem",
  requestBody: {
    parameterPath: [
      "options",
      "request"
    ],
    mapper: Mappers.DeleteTaskItemReq
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};

export {
  TodoListAPI,
  TodoListAPIContext,
  Models as TodoListAPIModels,
  Mappers as TodoListAPIMappers
};
