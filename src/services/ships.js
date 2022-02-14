import axios from 'axios';

const baseUrl = 'https://api.jsonserve.com/sIHs1o';

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data.ships;
}

const exportedObject = { getAll }
export default exportedObject;