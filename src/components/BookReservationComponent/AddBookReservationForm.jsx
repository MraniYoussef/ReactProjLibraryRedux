import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookReservation } from "../../redux/bookReservations/actions";

function AddBookReservationForm(){

    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ });
    const [errors, setErrors] = useState({ }) 
    const {status, reducerBookReservation } = useSelector(state => state);

    const handleInputChange = e => {
        const{name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddBookReservation = () => {
        setErrors({
            ...errors,
            idBook: !formState.idBook ? 'Id Book is required' : null,
        });
        
        if(formState.idBook){
            dispatch(addBookReservation(formState))
            setErrors({})
        }
        
    }

    return (
        <div>
            <input type="text" value={formState.idBook} name='idBook' onChange={handleInputChange} />
            {errors.idBook && <small>{errors.idBook}</small>}
            <select defaultValue={status && status[0]} name='status' onChange={handleInputChange}>{status?.map(status => <option key={status} value={status}>{status}</option>)}</select >
{/*             <input type="text" value={formState.type} name='type' onChange={handleInputChange} />
 */}            {errors.type && <small>{errors.type}</small>}
            <br/>
            <select defaultValue={reducerBookReservation.members && reducerBookReservation.members[0]} name='idMember' onChange={handleInputChange}>{reducerBookReservation.members?.map(member => <option key={member.idMember} value={member.idMember}>{member.idMember} : {member.lastName}</option>)}</select >
            <select defaultValue={reducerBookReservation.books && reducerBookReservation.books[0]} name='idBook' onChange={handleInputChange}>{reducerBookReservation.books?.map(book => <option key={book.idBook} value={book.idBook}>{book.idBook} : {book.title}</option>)}</select >



            <button onClick={handleAddBookReservation}>Add</button>
        </div>
    )
}
export default AddBookReservationForm;