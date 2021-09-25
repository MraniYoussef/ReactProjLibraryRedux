import AlertBookReservation from "../components/Alert/AlertBookReservation/AlertBookReservation";
import AddBookReservationForm from "../components/BookReservationComponent/AddBookReservationForm";
import BookReservationList from "../components/BookReservationComponent/BookReservationList";
import SearchBarBookReservation from "../components/BookReservationComponent/SearchBarBookReservation";



function BookReservationPage() {
     
    return (
      <>
         
        <AlertBookReservation />
        <SearchBarBookReservation  />
        <BookReservationList  />
        <AddBookReservationForm />
  
      </>
    );
  }
  
  export default BookReservationPage;