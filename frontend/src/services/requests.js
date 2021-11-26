import axios from 'axios';

const requestLeaderboard = async (url, endpoint) => {
  const { data } = await axios.get(`${url}${endpoint}`);
  return data;
};

export default requestLeaderboard;
