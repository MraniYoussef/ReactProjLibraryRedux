import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookReservation, saveBookReservation } from '../../../redux/bookReservations/actions';
import './BookReservation.css';

function BookReservation({details}){
    const {status} = useSelector(state => state);
    const dispatch = useDispatch();
    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });
    console.log("rrrrr",details);

    const handleOnDeleteClick = () => {
        dispatch(deleteBookReservation(details.idBookReservation));
    }

    const handleOnEditClick = () => {
        setIsModeEdit(!isModeEdit)
    }
    const handleOnChange = e => {
        setData({
            ...data, [e.target.name] : e.target.value, 
        })
    }

    const handleOnSaveClick = async  () => {
       
        dispatch(saveBookReservation(data));
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="BookReservation">
                <img src="https://i.pinimg.com/originals/29/32/07/2932077e6a455ad4286c3ea188fac822.png" />
                {status === 'update-book-reservation-progress' ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='idBookReservation'>Id Book Reservation : </label>
                            <input name='idBookReservation' value={data.idBookReservation} onChange={handleOnChange} />
                            <label for='idBook'>Id book : </label>
                            <input name='idBook' value={data.book.idBook} onChange={handleOnChange} />
                            <label for='idMember'>Id member : </label>
                            <input name='idMember' value={data.member.idMember} onChange={handleOnChange} />
                           
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                                <h1>Id Book Reservation : {details.idBookReservation}</h1>
                                <p>Id Book :{details.book.idBook}</p>
                                <p>{details.book.title}</p>
                                <p>{details.book.type}</p>
                                <p>Id Member : {details.member.idMember}</p>
                                <p>{details.member.firstName}</p>
                                <p>{details.member.lastName}</p>
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default BookReservation;