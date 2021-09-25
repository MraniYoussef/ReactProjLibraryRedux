import { addBookReservationApi, deleteBookReservationApi, getBookReservationsApi, saveBookReservationApi, searchBookReservationApi } from "../../api/apiBookReservations";
import { SEARCH_BOOKS_ERROR } from "../books/types";
import { ADD_BOOK_RESERVATION, ADD_BOOK_RESERVATION_ERROR, ADD_BOOK_RESERVATION_SUCCESS, DELETE_BOOK_RESERVATION, DELETE_BOOK_RESERVATION_ERROR, DELETE_BOOK_RESERVATION_SUCCESS, FETCHING_BOOK_RESERVATIONS, FETCHING_BOOK_RESERVATIONS_ERROR, FETCHING_BOOK_RESERVATIONS_SUCCESS, SEARCH_BOOK_RESERVATION, SEARCH_BOOK_RESERVATIONS_SUCCESS, UPDATE_BOOK_RESERVATION, UPDATE_BOOK_RESERVATION_ERROR, UPDATE_BOOK_RESERVATION_SUCCESS } from "./types";

export const fetchBookReservations = () => {

    return async dispatch => {
        dispatch({type: FETCHING_BOOK_RESERVATIONS});

        try {

            const bookReservations = await getBookReservationsApi();
            dispatch({
                type: FETCHING_BOOK_RESERVATIONS_SUCCESS,
                payload: bookReservations,

            });

        }catch(err){
            dispatch({
                type: FETCHING_BOOK_RESERVATIONS_ERROR,
                payload: err,
            })
        }
    }
}

export const deleteBookReservation = id => {
    return async dispatch => {
        
        dispatch({type: DELETE_BOOK_RESERVATION});
        try {
        await deleteBookReservationApi(id) ;
            dispatch({
                type: DELETE_BOOK_RESERVATION_SUCCESS,
                payload: id,
            });
        }catch(err){
            dispatch({
                type: DELETE_BOOK_RESERVATION_ERROR,
                payload: err,
            })
        }
    }
}

export const addBookReservation = data => {
    return async dispatch => {
        
        dispatch({type: ADD_BOOK_RESERVATION});
        try {
        const bookReservation = await addBookReservationApi(data) ;
            dispatch({
                type: ADD_BOOK_RESERVATION_SUCCESS,
                payload: {...data, bookReservation}
            });
        }catch(err){
            dispatch({
                type: ADD_BOOK_RESERVATION_ERROR,
                payload: err,
            })
        }
    }
}

export const saveBookReservation = data => {
    return async dispatch => {
        
        dispatch({type: UPDATE_BOOK_RESERVATION});
        try {
         await saveBookReservationApi(data) ;
            dispatch({
                type: UPDATE_BOOK_RESERVATION_SUCCESS,
                payload: {data}
            });
        }catch(err){
            dispatch({
                type: UPDATE_BOOK_RESERVATION_ERROR,
                payload: err,
            })
        }
    }
}

export const searchBookReservation = title => {
    return async dispatch => {
        
        dispatch({type: SEARCH_BOOK_RESERVATION});
        try {
         const bookReservations = await searchBookReservationApi(title) ;
            dispatch({
                type: SEARCH_BOOK_RESERVATIONS_SUCCESS,
                payload: bookReservations,
            });
        }catch(err){
            dispatch({
                type: SEARCH_BOOKS_ERROR,
                payload: err,
            })
        }
    }
}