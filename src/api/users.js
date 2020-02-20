import { getReq, postReq } from './utils';

export const addUser = ({ username, password, motto, favoriteAuthor }) => postReq('users', { username, password, motto, favoriteAuthor });
export const getUsers = () => getReq('users');
export const login = ({ username, password }) => postReq('login', { username: username.toLowerCase(), password });
export const verifyToken = () => getReq(`login/verify-token/${localStorage.getItem('token')}`);
