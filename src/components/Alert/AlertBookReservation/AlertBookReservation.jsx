import { useSelector } from "react-redux";
import './AlertBookReservation.css';

export default function AlertBookReservation(){

    const {reducerBookReservation} = useSelector(state => state);
    const messages = {

        'add-book-reservation-error' : 'Error while adding book reservation',
        'add-book-reservation-success' : 'Book reservation added successfully',
        'update-book-reservation-error' : 'Error while updating book reservation',
        'update-book-reservation-success' : 'Book reservation updated successfully',
        'fetching-book-reservations-error' : 'Error while fetching book reservations',
        'fetching-book-reservations-success' : 'Book reservations loaded successfully', 
        'delete-book-reservation-error' : 'Error while deleting book reservation',
        'delete-book-reservation-success' : 'Book reservation deleted successfully',
    }

    return (
        <div className="AlertBookReservation">{reducerBookReservation.status && messages[reducerBookReservation.status]}</div>
    )
}