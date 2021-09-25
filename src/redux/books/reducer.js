import { ADD_BOOK, ADD_BOOK_ERROR, ADD_BOOK_SUCCESS, DELETE_BOOK, DELETE_BOOK_ERROR, DELETE_BOOK_SUCCESS, FETCHING_BOOKS, FETCHING_BOOKS_ERROR, FETCHING_BOOKS_SUCCESS, FETCHING_BOOKS_TYPE, FETCHING_BOOKS_TYPE_ERROR, FETCHING_BOOKS_TYPE_SUCCESS, SEARCH_BOOK, SEARCH_BOOKS_ERROR, SEARCH_BOOKS_SUCCESS, UPDATE_BOOK, UPDATE_BOOK_ERROR, UPDATE_BOOK_SUCCESS } from "./types";

const initialStateBook = {
    books: [],
    status: null,
    error: null,
    booksType: [],
}


const reducer  = (state = initialStateBook, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCHING_BOOKS: {
            return {
                ...state,
                status: 'fetching-progress',
            }
        }
        case FETCHING_BOOKS_ERROR: {
            return {
                ...state,
                status: 'fetching-error',
                error: payload,
            }
        }
        case FETCHING_BOOKS_SUCCESS: {
            return {
                ...state,
                status: 'fetching-success',
                books: payload,
            }
        }

        case DELETE_BOOK: {
            return {
                ...state,
                status: 'delete-progress',
            }
        }
        case DELETE_BOOK_ERROR: {
            return {
                ...state,
                status: 'delete-error',
                error: payload,
            }
        }
        case DELETE_BOOK_SUCCESS: {
            return {
                ...state,
                status: 'delete-success',
                books: [...state.books.filter(book => book.id !== payload)]
            }
        }

        case ADD_BOOK: {
            return {
                ...state,
                status: 'add-book-progress',
            }
        }
        case ADD_BOOK_ERROR: {
            return {
                ...state,
                status: 'add-book-error',
                error: payload,
            }
        }
        case ADD_BOOK_SUCCESS: {
            return {
                ...state,
                status: 'add-book-success',
                books: [...state.books, payload],
            }
        }
        case UPDATE_BOOK: {
            return {
                ...state,
                status: 'update-book-progress',
            }
        }
        case UPDATE_BOOK_ERROR: {
            return {
                ...state,
                status: 'update-book-error',
                error: payload,
            }
        }
        case UPDATE_BOOK_SUCCESS: {
            const newBooks = [...state.books];
            const book = newBooks.find(book => book.id === payload.id);
            book.title = payload.title;
            book.description = payload.description;
            return {
                ...state,
                status: 'update-book-success',
                books: [...newBooks],
            }
        }

        case SEARCH_BOOK: {
            return {
                ...state,
                status: 'search-book-progress',
            }
        }
        case SEARCH_BOOKS_ERROR: {
            return {
                ...state,
                status: 'search-book-error',
                error: payload,
            }
        }
        case SEARCH_BOOKS_SUCCESS: {
            
            return {
                ...state,
                status: 'update-book-success',
                books: [...payload],
            }
        }
        case FETCHING_BOOKS_TYPE: {
            return {
                ...state,
                status: 'fetching-books-types-progress',
            }
        }
        case FETCHING_BOOKS_TYPE_ERROR: {
            return {
                ...state,
                status: 'fetching-books-type-error',
                error: payload,
            }
        }
        case FETCHING_BOOKS_TYPE_SUCCESS: {
            return {
                ...state,
                status: 'fetching-books-type-success',
                booksType: payload,
            }
        }
        
        default : {
            return state;
        }
    }
}
export default reducer;