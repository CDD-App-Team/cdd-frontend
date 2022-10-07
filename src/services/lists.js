import { del, get, post, put } from './request.js';

const URL = 'http://localhost:7890';

export async function getLists() {
  return await get(URL);
}

export async function createList(list) {
  return await post(`${URL}/api/v1/tasks`, list);
}

export async function createListItem(item) {
  return await post(`${URL}/api/v1/tasks`, item);
}

export async function deleteListItem(listId, itemId) {
  return await del(`${URL}/${listId}/items/${itemId}`);
}

export async function updateListItem(listId, itemId, updates) {
  return await put(`${URL}/${listId}/items/${itemId}`, updates);
}

