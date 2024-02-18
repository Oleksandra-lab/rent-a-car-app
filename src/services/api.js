import axios from 'axios'

axios.defaults.baseURL = `https://65cbd8f2efec34d9ed882e83.mockapi.io`;

export const requestAllCars = async (page=1) => {
  const { data } = await axios.get(`/cars?page=${page}&limit=12`);
  console.log(data);
  return data;
};
