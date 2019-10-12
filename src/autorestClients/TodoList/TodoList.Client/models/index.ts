/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing TaskItem.
 */
export interface TaskItem {
  id?: string;
  title?: string;
  status?: number;
  createdDate?: Date;
}

/**
 * An interface representing TodoItem.
 */
export interface TodoItem {
  id?: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  status?: number;
  subTasks?: TaskItem[];
  createdDate?: Date;
}

/**
 * An interface representing TaskItemReq.
 */
export interface TaskItemReq {
  title?: string;
  status?: number;
}

/**
 * An interface representing AddTodoItemReq.
 */
export interface AddTodoItemReq {
  title?: string;
  description?: string;
  dueDate?: Date;
  status?: number;
  subTasks?: TaskItemReq[];
}

/**
 * An interface representing UpdateTodoItemReq.
 */
export interface UpdateTodoItemReq {
  id?: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  status?: number;
  subTasks?: TaskItemReq[];
}

/**
 * An interface representing UpdateTodoItemStatusReq.
 */
export interface UpdateTodoItemStatusReq {
  id?: string;
  status?: number;
}

/**
 * An interface representing DeleteTodoItemReq.
 */
export interface DeleteTodoItemReq {
  id?: string;
}

/**
 * An interface representing AddTaskItemReq.
 */
export interface AddTaskItemReq {
  todoItemId?: string;
  title?: string;
  status?: number;
}

/**
 * An interface representing UpdateTaskItemReq.
 */
export interface UpdateTaskItemReq {
  todoItemId?: string;
  taskItemId?: string;
  title?: string;
  status?: number;
}

/**
 * An interface representing UpdateTaskItemStatusReq.
 */
export interface UpdateTaskItemStatusReq {
  todoItemId?: string;
  taskItemId?: string;
  status?: number;
}

/**
 * An interface representing DeleteTaskItemReq.
 */
export interface DeleteTaskItemReq {
  taskItemId?: string;
  todoItemId?: string;
}

/**
 * An interface representing TodoListAPIOptions.
 */
export interface TodoListAPIOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIGetTodoListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Default value: 1.
   */
  filterType?: number;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIAddTodoItemOptionalParams extends msRest.RequestOptionsBase {
  request?: AddTodoItemReq;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIUpdateTodoItemOptionalParams extends msRest.RequestOptionsBase {
  request?: UpdateTodoItemReq;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIUpdateTodoItemStatusOptionalParams extends msRest.RequestOptionsBase {
  request?: UpdateTodoItemStatusReq;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIDeleteTodoItemOptionalParams extends msRest.RequestOptionsBase {
  request?: DeleteTodoItemReq;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIAddTaskItemOptionalParams extends msRest.RequestOptionsBase {
  request?: AddTaskItemReq;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIUpdateTaskItemOptionalParams extends msRest.RequestOptionsBase {
  request?: UpdateTaskItemReq;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIUpdateTaskItemStatusOptionalParams extends msRest.RequestOptionsBase {
  request?: UpdateTaskItemStatusReq;
}

/**
 * Optional Parameters.
 */
export interface TodoListAPIDeleteTaskItemOptionalParams extends msRest.RequestOptionsBase {
  request?: DeleteTaskItemReq;
}

/**
 * Contains response data for the getTodoList operation.
 */
export type GetTodoListResponse = Array<TodoItem> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TodoItem[];
    };
};

/**
 * Contains response data for the addTodoItem operation.
 */
export type AddTodoItemResponse = TodoItem & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TodoItem;
    };
};

/**
 * Contains response data for the updateTodoItem operation.
 */
export type UpdateTodoItemResponse = TodoItem & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TodoItem;
    };
};

/**
 * Contains response data for the updateTodoItemStatus operation.
 */
export type UpdateTodoItemStatusResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the deleteTodoItem operation.
 */
export type DeleteTodoItemResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the addTaskItem operation.
 */
export type AddTaskItemResponse = TaskItem & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TaskItem;
    };
};

/**
 * Contains response data for the updateTaskItem operation.
 */
export type UpdateTaskItemResponse = TaskItem & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TaskItem;
    };
};

/**
 * Contains response data for the updateTaskItemStatus operation.
 */
export type UpdateTaskItemStatusResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the deleteTaskItem operation.
 */
export type DeleteTaskItemResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};