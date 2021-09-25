import AlertBook from "../components/Alert/AlertBook/AlertBook";
import AddBookForm from "../components/BookComponent/AddBookForm";
import BookList from "../components/BookComponent/BookList";
import SearchBar from "../components/BookComponent/SearchBar";

function BookPage() {
     
    return (
      <>
         
        <AlertBook />
        <SearchBar  />
        <BookList  />
        <AddBookForm />
  
      </>
    );
  }
  
  export default BookPage;