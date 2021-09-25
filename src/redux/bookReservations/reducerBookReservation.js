import { ADD_BOOK_ERROR, FETCHING_BOOKS_ERROR } from "../books/types";
import { ADD_BOOK_RESERVATION, ADD_BOOK_RESERVATION_SUCCESS, DELETE_BOOK_RESERVATION, DELETE_BOOK_RESERVATION_ERROR, DELETE_BOOK_RESERVATION_SUCCESS, FETCHING_BOOK_RESERVATIONS, FETCHING_BOOK_RESERVATIONS_SUCCESS, SEARCH_BOOK_RESERVATION, SEARCH_BOOK_RESERVATIONS_ERROR, SEARCH_BOOK_RESERVATIONS_SUCCESS, UPDATE_BOOK_RESERVATION, UPDATE_BOOK_RESERVATION_ERROR, UPDATE_BOOK_RESERVATION_SUCCESS } from "./types";

const initialStateBookReservation = {
    bookReservations: [],
    status: null,
    error: null,
}


const reducerBookReservation  = (state = initialStateBookReservation, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCHING_BOOK_RESERVATIONS: {
            return {
                ...state,
                status: 'fetching-book-reservations-progress',
            }
        }
        case FETCHING_BOOKS_ERROR: {
            return {
                ...state,
                status: 'fetching-book-reservations-error',
                error: payload,
            }
        }
        case FETCHING_BOOK_RESERVATIONS_SUCCESS: {
            return {
                ...state,
                status: 'fetching-book-reservations-success',
                bookReservations: payload,
            }
        }

        case DELETE_BOOK_RESERVATION: {
            return {
                ...state,
                status: 'delete-book-reservation-progress',
            }
        }
        case DELETE_BOOK_RESERVATION_ERROR: {
            return {
                ...state,
                status: 'delete-book-reservation-error',
                error: payload,
            }
        }
        case DELETE_BOOK_RESERVATION_SUCCESS: {
            return {
                ...state,
                status: 'delete-book-reservation-success',
                bookReservations: [...state.bookReservations.filter(bookReservation => bookReservation.id !== payload)]
            }
        }

        case ADD_BOOK_RESERVATION: {
            return {
                ...state,
                status: 'add-book-reservation-progress',
            }
        }
        case ADD_BOOK_ERROR: {
            return {
                ...state,
                status: 'add-book-reservation-error',
                error: payload,
            }
        }
        case ADD_BOOK_RESERVATION_SUCCESS: {
            return {
                ...state,
                status: 'add-book-reservation-success',
                bookReservations: [...state.bookReservations, payload],
            }
        }
        case UPDATE_BOOK_RESERVATION: {
            return {
                ...state,
                status: 'update-book-reservation-progress',
            }
        }
        case UPDATE_BOOK_RESERVATION_ERROR: {
            return {
                ...state,
                status: 'update-book-reservation-error',
                error: payload,
            }
        }
        case UPDATE_BOOK_RESERVATION_SUCCESS: {
            const newBookReservations = [...state.bookReservations];
            const bookReservation = newBookReservations.find(bookReservation => bookReservation.id === payload.id);
            bookReservation.id = payload.id;
            bookReservation.book.title = payload.book.title;
            return {
                ...state,
                status: 'update-book-reservation-success',
                books: [...newBookReservations],
            }
        }

        case SEARCH_BOOK_RESERVATION: {
            return {
                ...state,
                status: 'search-book-reservation-progress',
            }
        }
        case SEARCH_BOOK_RESERVATIONS_ERROR: {
            return {
                ...state,
                status: 'search-book-reservations-error',
                error: payload,
            }
        }
        case SEARCH_BOOK_RESERVATIONS_SUCCESS: {
            
            return {
                ...state,
                status: 'update-book-reservations-success',
                bookReservations: [...payload],
            }
        }
        
        default : {
            return state;
        }
    }
}
export default reducerBookReservation;