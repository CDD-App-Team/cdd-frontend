import { del, get, post, put } from './request.js';

const URL = 'https://cdd-backend.herokuapp.com';

export async function getTasks() {
  return await get(URL);
}

export async function createNewTask(task) {
  return await post(`${URL}/api/v1/tasks`, task);
}

// export async function deleteTask(taskId) {
//   return await del(`${URL}/tasks/${taskId}`);
// }

// export async function updateTask(taskId, updates) {
//   return await put(`${URL}/tasks/${taskId}`, updates);
// }

