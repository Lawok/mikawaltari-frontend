import { axiosInstance as axios } from "./axiosConfig";

const getHost = () => window.location.host === 'localhost:8080' ? 'http://localhost:3001/' : '/';

const errorHandler = error => {
  // TODO: handle the errors better
  // eslint-disable-next-line no-console
  console.warn('Something went wrong, check that your api request is correct', error);
}

export const getReq = (endpoint, params) => axios.get(`${getHost()}api/${endpoint}`, params)
  .then(({ data }) => data)
  .catch(err => errorHandler(err));

export const putReq = (endpoint, params) => axios.put(`${getHost()}api/${endpoint}`, params)
  .then(({ data }) => data)
  .catch(err => errorHandler(err));

export const postReq = (endpoint, params) => axios.post(`${getHost()}api/${endpoint}`, params)
  .then(({ data }) => data)
  .catch(err => errorHandler(err));

export const deleteReq = (endpoint, params) => axios.delete(`${getHost()}api/${endpoint}`, params)
  .then(({ data }) => data)
  .catch(err => errorHandler(err));
