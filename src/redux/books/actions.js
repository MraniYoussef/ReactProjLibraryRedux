import { addBooksApi, deleteBooksApi, getBooksApi, getBooktypeApi, saveBooksApi, searchBookApi } from "../../api/apiBooks";
import { ADD_BOOK, ADD_BOOK_ERROR, ADD_BOOK_SUCCESS, DELETE_BOOK, DELETE_BOOK_ERROR, DELETE_BOOK_SUCCESS, FETCHING_BOOKS, FETCHING_BOOKS_ERROR, FETCHING_BOOKS_SUCCESS, FETCHING_BOOKS_TYPE, FETCHING_BOOKS_TYPE_ERROR, FETCHING_BOOKS_TYPE_SUCCESS, SEARCH_BOOK, SEARCH_BOOKS_ERROR, SEARCH_BOOKS_SUCCESS, UPDATE_BOOK, UPDATE_BOOK_ERROR, UPDATE_BOOK_SUCCESS } from "./types"

export const fetchBooks = () => {

    return async dispatch => {
        dispatch({type: FETCHING_BOOKS});

        try {

            const books = await getBooksApi();
            dispatch({
                type: FETCHING_BOOKS_SUCCESS,
                payload: books,

            });

        }catch(err){
            dispatch({
                type: FETCHING_BOOKS_ERROR,
                payload: err,
            })
        }
    }
}

export const deleteBook = id => {
    return async dispatch => {
        
        dispatch({type: DELETE_BOOK});
        try {
        await deleteBooksApi(id) ;
            dispatch({
                type: DELETE_BOOK_SUCCESS,
                payload: id,
            });
        }catch(err){
            dispatch({
                type: DELETE_BOOK_ERROR,
                payload: err,
            })
        }
    }
}

export const addBook = data => {
    return async dispatch => {
        
        dispatch({type: ADD_BOOK});
        try {
        const book = await addBooksApi(data) ;
            dispatch({
                type: ADD_BOOK_SUCCESS,
                payload: {...data, book}
            });
        }catch(err){
            dispatch({
                type: ADD_BOOK_ERROR,
                payload: err,
            })
        }
    }
}

export const saveBook = data => {
    return async dispatch => {
        
        dispatch({type: UPDATE_BOOK});
        try {
         await saveBooksApi(data) ;
            dispatch({
                type: UPDATE_BOOK_SUCCESS,
                payload: {data}
            });
        }catch(err){
            dispatch({
                type: UPDATE_BOOK_ERROR,
                payload: err,
            })
        }
    }
}

export const searchBook = title => {
    return async dispatch => {
        
        dispatch({type: SEARCH_BOOK});
        try {
         const books = await searchBookApi(title) ;
            dispatch({
                type: SEARCH_BOOKS_SUCCESS,
                payload: books,
            });
        }catch(err){
            dispatch({
                type: SEARCH_BOOKS_ERROR,
                payload: err,
            })
        }
    }
}
export const fetchBooksType = () => {

    return async dispatch => {
        dispatch({type: FETCHING_BOOKS_TYPE});

        try {

            const booksTypes = await getBooktypeApi();
            dispatch({
                type: FETCHING_BOOKS_TYPE_SUCCESS,
                payload: booksTypes,

            });

        }catch(err){
            dispatch({
                type: FETCHING_BOOKS_TYPE_ERROR,
                payload: err,
            })
        }
    }
}