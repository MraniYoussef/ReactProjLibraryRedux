import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookReservations } from "../../redux/bookReservations/actions";
import BookReservation from "./BookReservation/BookReservation";

function BookReservationList(){

    const {reducerBookReservation, status, error} = useSelector(state => state);
    const dispatch = useDispatch();
     useEffect(() => {
     dispatch(fetchBookReservations());
  }, []);

    return (
        <div>
             {status === 'fetching-book-reservations-progress' && <div>Loading...</div>}
             {reducerBookReservation.bookReservations.length && reducerBookReservation.bookReservations.map(bookReservation => <BookReservation key={bookReservation.idBookReservation} details={bookReservation} />)}
             {status === 'fetching-book-reservations-error' && <div>Error : {error}</div>}

           
        </div>
    )
}
export default BookReservationList;