<!-- //💡In the Beginning, PaPaGuy wrote beautiful Codes < /> 💜❤️ // -->

import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { fetchData };
