import { del, get, post } from './request.js';

const URL = 'http://localhost:7890';

export async function signUpUser(credentials) {
  const response = await post(`${URL}/api/v1/users`, credentials);
  response.user = response.data;
  return response;
}

export async function signInUser(credentials) {
  const response = await post(`${URL}/api/v1/users/sessions`, credentials);
  response.user = response.data;
  return response;
}

export async function signOutUser() {
  const response = await del(`${URL}/api/v1/users/sessions`);
  return response;
}

export async function verifyUser() {
  const response = await get(`${URL}/api/v1/users/sessions`);
  response.user = response.data;
  return response;
}

const USER_KEY = 'USER';

export function storeLocalUser(user) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
}

export function getLocalUser() {
  const json = localStorage.getItem(USER_KEY);
  try {
    if (json) {
      return JSON.parse(json);
    }
  } catch (e) {
    storeLocalUser();
  }
}
