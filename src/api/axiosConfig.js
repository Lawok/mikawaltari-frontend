import axios from 'axios';

const createAxiosInstance = () => {
  const instance = axios.create();

  return instance;
};

export const axiosInstance = createAxiosInstance();
