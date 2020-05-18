import axios from 'axios';

export const API_URL = 'https://uniao-rio.now.sh';

export const getIndexes = index => {
  return axios({
    url: `${API_URL}/search?index=${index}`,
    method: 'get',
  });
};
