import axios from 'axios';

export const API_URL = 'https://uniao-rio.now.sh';

export const getAllNeighborhood = () => {
  return axios({
    url: `${API_URL}/search?index=ongs`,
    method: 'get',
  });
};
