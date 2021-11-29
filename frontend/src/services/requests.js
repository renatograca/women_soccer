import axios from 'axios';

export const requestData = async (url, endpoint) => {
  const { data } = await axios.get(`${url}${endpoint}`);
  return data;
};

export const requestLogin = async (url, endpoint, body) => {
  const { data } = await axios.post(`${url}${endpoint}`, body);
  return data;
};
