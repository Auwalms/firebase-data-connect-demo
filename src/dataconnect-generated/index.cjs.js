const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'task-tracker-fdc-demo',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const getCategoriesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCategories');
}
getCategoriesRef.operationName = 'GetCategories';
exports.getCategoriesRef = getCategoriesRef;

exports.getCategories = function getCategories(dc) {
  return executeQuery(getCategoriesRef(dc));
};

const getTasksWithCategoriesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTasksWithCategories');
}
getTasksWithCategoriesRef.operationName = 'GetTasksWithCategories';
exports.getTasksWithCategoriesRef = getTasksWithCategoriesRef;

exports.getTasksWithCategories = function getTasksWithCategories(dc) {
  return executeQuery(getTasksWithCategoriesRef(dc));
};

const getTasksByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTasksByCategory', inputVars);
}
getTasksByCategoryRef.operationName = 'GetTasksByCategory';
exports.getTasksByCategoryRef = getTasksByCategoryRef;

exports.getTasksByCategory = function getTasksByCategory(dcOrVars, vars) {
  return executeQuery(getTasksByCategoryRef(dcOrVars, vars));
};

const getTaskByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTaskById', inputVars);
}
getTaskByIdRef.operationName = 'GetTaskById';
exports.getTaskByIdRef = getTaskByIdRef;

exports.getTaskById = function getTaskById(dcOrVars, vars) {
  return executeQuery(getTaskByIdRef(dcOrVars, vars));
};

const createCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory', inputVars);
}
createCategoryRef.operationName = 'CreateCategory';
exports.createCategoryRef = createCategoryRef;

exports.createCategory = function createCategory(dcOrVars, vars) {
  return executeMutation(createCategoryRef(dcOrVars, vars));
};

const createTaskRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTask', inputVars);
}
createTaskRef.operationName = 'CreateTask';
exports.createTaskRef = createTaskRef;

exports.createTask = function createTask(dcOrVars, vars) {
  return executeMutation(createTaskRef(dcOrVars, vars));
};

const completeTaskRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CompleteTask', inputVars);
}
completeTaskRef.operationName = 'CompleteTask';
exports.completeTaskRef = completeTaskRef;

exports.completeTask = function completeTask(dcOrVars, vars) {
  return executeMutation(completeTaskRef(dcOrVars, vars));
};

const deleteTaskRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTask', inputVars);
}
deleteTaskRef.operationName = 'DeleteTask';
exports.deleteTaskRef = deleteTaskRef;

exports.deleteTask = function deleteTask(dcOrVars, vars) {
  return executeMutation(deleteTaskRef(dcOrVars, vars));
};

const deleteCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteCategory', inputVars);
}
deleteCategoryRef.operationName = 'DeleteCategory';
exports.deleteCategoryRef = deleteCategoryRef;

exports.deleteCategory = function deleteCategory(dcOrVars, vars) {
  return executeMutation(deleteCategoryRef(dcOrVars, vars));
};

const updateCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCategory', inputVars);
}
updateCategoryRef.operationName = 'UpdateCategory';
exports.updateCategoryRef = updateCategoryRef;

exports.updateCategory = function updateCategory(dcOrVars, vars) {
  return executeMutation(updateCategoryRef(dcOrVars, vars));
};
