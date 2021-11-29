import axios from 'axios';

const requestData = async (url, endpoint) => {
  const { data } = await axios.get(`${url}${endpoint}`);
  return data;
};

export default requestData;
