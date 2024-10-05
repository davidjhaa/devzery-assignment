import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${API_BASE_URL}/posts`, postData);
  return response.data;
};

export const fetchComments = async (postId) => {
  const response = await axios.get(`${API_BASE_URL}/comments`, {
    params: { postId },
  });
  return response.data;
};
