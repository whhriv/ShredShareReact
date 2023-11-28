import SkiType from '../types/ski'
import APIResponse from '../types/api';
import UserType from '../types/auth';

const base: string = '127.0.0.1:5000/api';
const postEndpoint: string = '/posts';
const userEndpoint: string = '/users';
const tokenEndpoint: string = '/token';

async function handleResponse(response: Response): Promise<any> {
  if (response.ok) {
    return response.json();
  } else {
    throw await response.json();
  }
}

async function getAllSkis(): Promise<APIResponse<SkiType[]>> {
  try {
    const response = await fetch(base + postEndpoint);
    const data = await handleResponse(response);
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: 'Something went wrong' };
  }
}

async function createNewUser(newUserData: Partial<UserType>): Promise<APIResponse<UserType>> {
  try {
    const response = await fetch(base + userEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    });
    const data = await handleResponse(response);
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: error.response?.data.error || 'Something went wrong' };
  }
}

export {
  getAllSkis,
  createNewUser,
  
};