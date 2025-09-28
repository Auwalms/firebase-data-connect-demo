import { GetCategoriesData, GetTasksWithCategoriesData, GetTasksByCategoryData, GetTasksByCategoryVariables, GetTaskByIdData, GetTaskByIdVariables, CreateCategoryData, CreateCategoryVariables, CreateTaskData, CreateTaskVariables, CompleteTaskData, CompleteTaskVariables, DeleteTaskData, DeleteTaskVariables, DeleteCategoryData, DeleteCategoryVariables, UpdateCategoryData, UpdateCategoryVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetCategories(options?: useDataConnectQueryOptions<GetCategoriesData>): UseDataConnectQueryResult<GetCategoriesData, undefined>;
export function useGetCategories(dc: DataConnect, options?: useDataConnectQueryOptions<GetCategoriesData>): UseDataConnectQueryResult<GetCategoriesData, undefined>;

export function useGetTasksWithCategories(options?: useDataConnectQueryOptions<GetTasksWithCategoriesData>): UseDataConnectQueryResult<GetTasksWithCategoriesData, undefined>;
export function useGetTasksWithCategories(dc: DataConnect, options?: useDataConnectQueryOptions<GetTasksWithCategoriesData>): UseDataConnectQueryResult<GetTasksWithCategoriesData, undefined>;

export function useGetTasksByCategory(vars: GetTasksByCategoryVariables, options?: useDataConnectQueryOptions<GetTasksByCategoryData>): UseDataConnectQueryResult<GetTasksByCategoryData, GetTasksByCategoryVariables>;
export function useGetTasksByCategory(dc: DataConnect, vars: GetTasksByCategoryVariables, options?: useDataConnectQueryOptions<GetTasksByCategoryData>): UseDataConnectQueryResult<GetTasksByCategoryData, GetTasksByCategoryVariables>;

export function useGetTaskById(vars: GetTaskByIdVariables, options?: useDataConnectQueryOptions<GetTaskByIdData>): UseDataConnectQueryResult<GetTaskByIdData, GetTaskByIdVariables>;
export function useGetTaskById(dc: DataConnect, vars: GetTaskByIdVariables, options?: useDataConnectQueryOptions<GetTaskByIdData>): UseDataConnectQueryResult<GetTaskByIdData, GetTaskByIdVariables>;

export function useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;
export function useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;

export function useCreateTask(options?: useDataConnectMutationOptions<CreateTaskData, FirebaseError, CreateTaskVariables>): UseDataConnectMutationResult<CreateTaskData, CreateTaskVariables>;
export function useCreateTask(dc: DataConnect, options?: useDataConnectMutationOptions<CreateTaskData, FirebaseError, CreateTaskVariables>): UseDataConnectMutationResult<CreateTaskData, CreateTaskVariables>;

export function useCompleteTask(options?: useDataConnectMutationOptions<CompleteTaskData, FirebaseError, CompleteTaskVariables>): UseDataConnectMutationResult<CompleteTaskData, CompleteTaskVariables>;
export function useCompleteTask(dc: DataConnect, options?: useDataConnectMutationOptions<CompleteTaskData, FirebaseError, CompleteTaskVariables>): UseDataConnectMutationResult<CompleteTaskData, CompleteTaskVariables>;

export function useDeleteTask(options?: useDataConnectMutationOptions<DeleteTaskData, FirebaseError, DeleteTaskVariables>): UseDataConnectMutationResult<DeleteTaskData, DeleteTaskVariables>;
export function useDeleteTask(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteTaskData, FirebaseError, DeleteTaskVariables>): UseDataConnectMutationResult<DeleteTaskData, DeleteTaskVariables>;

export function useDeleteCategory(options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, DeleteCategoryVariables>): UseDataConnectMutationResult<DeleteCategoryData, DeleteCategoryVariables>;
export function useDeleteCategory(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, DeleteCategoryVariables>): UseDataConnectMutationResult<DeleteCategoryData, DeleteCategoryVariables>;

export function useUpdateCategory(options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, UpdateCategoryVariables>): UseDataConnectMutationResult<UpdateCategoryData, UpdateCategoryVariables>;
export function useUpdateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, UpdateCategoryVariables>): UseDataConnectMutationResult<UpdateCategoryData, UpdateCategoryVariables>;
