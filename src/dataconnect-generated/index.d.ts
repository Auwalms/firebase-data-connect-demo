import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CompleteTaskData {
  task_update?: Task_Key | null;
}

export interface CompleteTaskVariables {
  taskId: UUIDString;
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCategoryVariables {
  title: string;
  color: string;
}

export interface CreateTaskData {
  task_insert: Task_Key;
}

export interface CreateTaskVariables {
  categoryId: UUIDString;
  title: string;
  description?: string | null;
  dueDate?: DateString | null;
}

export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}

export interface DeleteCategoryVariables {
  categoryId: UUIDString;
}

export interface DeleteTaskData {
  task_delete?: Task_Key | null;
}

export interface DeleteTaskVariables {
  taskId: UUIDString;
}

export interface GetCategoriesData {
  categories: ({
    id: UUIDString;
    title: string;
    color: string;
    createdAt: DateString;
  } & Category_Key)[];
}

export interface GetTaskByIdData {
  tasks: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    dueDate?: DateString | null;
    completed: boolean;
    createdAt: TimestampString;
    category: {
      id: UUIDString;
      title: string;
      color: string;
    } & Category_Key;
  } & Task_Key)[];
}

export interface GetTaskByIdVariables {
  id: UUIDString;
}

export interface GetTasksByCategoryData {
  tasks: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    dueDate?: DateString | null;
    completed: boolean;
    createdAt: TimestampString;
    category: {
      id: UUIDString;
      title: string;
      color: string;
    } & Category_Key;
  } & Task_Key)[];
}

export interface GetTasksByCategoryVariables {
  categoryId: UUIDString;
}

export interface GetTasksWithCategoriesData {
  tasks: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    dueDate?: DateString | null;
    completed: boolean;
    createdAt: TimestampString;
    category: {
      id: UUIDString;
      title: string;
      color: string;
    } & Category_Key;
  } & Task_Key)[];
}

export interface Task_Key {
  id: UUIDString;
  __typename?: 'Task_Key';
}

export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}

export interface UpdateCategoryVariables {
  categoryId: UUIDString;
  title: string;
  color: string;
}

interface GetCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCategoriesData, undefined>;
  operationName: string;
}
export const getCategoriesRef: GetCategoriesRef;

export function getCategories(): QueryPromise<GetCategoriesData, undefined>;
export function getCategories(dc: DataConnect): QueryPromise<GetCategoriesData, undefined>;

interface GetTasksWithCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTasksWithCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetTasksWithCategoriesData, undefined>;
  operationName: string;
}
export const getTasksWithCategoriesRef: GetTasksWithCategoriesRef;

export function getTasksWithCategories(): QueryPromise<GetTasksWithCategoriesData, undefined>;
export function getTasksWithCategories(dc: DataConnect): QueryPromise<GetTasksWithCategoriesData, undefined>;

interface GetTasksByCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTasksByCategoryVariables): QueryRef<GetTasksByCategoryData, GetTasksByCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTasksByCategoryVariables): QueryRef<GetTasksByCategoryData, GetTasksByCategoryVariables>;
  operationName: string;
}
export const getTasksByCategoryRef: GetTasksByCategoryRef;

export function getTasksByCategory(vars: GetTasksByCategoryVariables): QueryPromise<GetTasksByCategoryData, GetTasksByCategoryVariables>;
export function getTasksByCategory(dc: DataConnect, vars: GetTasksByCategoryVariables): QueryPromise<GetTasksByCategoryData, GetTasksByCategoryVariables>;

interface GetTaskByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTaskByIdVariables): QueryRef<GetTaskByIdData, GetTaskByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTaskByIdVariables): QueryRef<GetTaskByIdData, GetTaskByIdVariables>;
  operationName: string;
}
export const getTaskByIdRef: GetTaskByIdRef;

export function getTaskById(vars: GetTaskByIdVariables): QueryPromise<GetTaskByIdData, GetTaskByIdVariables>;
export function getTaskById(dc: DataConnect, vars: GetTaskByIdVariables): QueryPromise<GetTaskByIdData, GetTaskByIdVariables>;

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface CreateTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTaskVariables): MutationRef<CreateTaskData, CreateTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTaskVariables): MutationRef<CreateTaskData, CreateTaskVariables>;
  operationName: string;
}
export const createTaskRef: CreateTaskRef;

export function createTask(vars: CreateTaskVariables): MutationPromise<CreateTaskData, CreateTaskVariables>;
export function createTask(dc: DataConnect, vars: CreateTaskVariables): MutationPromise<CreateTaskData, CreateTaskVariables>;

interface CompleteTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CompleteTaskVariables): MutationRef<CompleteTaskData, CompleteTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CompleteTaskVariables): MutationRef<CompleteTaskData, CompleteTaskVariables>;
  operationName: string;
}
export const completeTaskRef: CompleteTaskRef;

export function completeTask(vars: CompleteTaskVariables): MutationPromise<CompleteTaskData, CompleteTaskVariables>;
export function completeTask(dc: DataConnect, vars: CompleteTaskVariables): MutationPromise<CompleteTaskData, CompleteTaskVariables>;

interface DeleteTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTaskVariables): MutationRef<DeleteTaskData, DeleteTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTaskVariables): MutationRef<DeleteTaskData, DeleteTaskVariables>;
  operationName: string;
}
export const deleteTaskRef: DeleteTaskRef;

export function deleteTask(vars: DeleteTaskVariables): MutationPromise<DeleteTaskData, DeleteTaskVariables>;
export function deleteTask(dc: DataConnect, vars: DeleteTaskVariables): MutationPromise<DeleteTaskData, DeleteTaskVariables>;

interface DeleteCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  operationName: string;
}
export const deleteCategoryRef: DeleteCategoryRef;

export function deleteCategory(vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;
export function deleteCategory(dc: DataConnect, vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;

interface UpdateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  operationName: string;
}
export const updateCategoryRef: UpdateCategoryRef;

export function updateCategory(vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;
export function updateCategory(dc: DataConnect, vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

