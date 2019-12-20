import { getReq, deleteReq, postReq, putReq } from './utils';

export const addBook = ({ title, author, year, votes }) => postReq('books', { title, author, year, votes });
export const deleteBook = bookId => deleteReq(`books/${bookId}`);
export const getBooks = () => getReq('books');
export const getBook = bookId => getReq(`books/${bookId}`);
export const updateBook = bookId => putReq(`books/${bookId}`);
