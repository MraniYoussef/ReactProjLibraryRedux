import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, saveBook } from '../../../redux/books/actions';
import './Book.css';

function Book({details}){
    const {status} = useSelector(state => state);
    const dispatch = useDispatch();
    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });
    const handleOnDeleteClick = () => {
        dispatch(deleteBook(details.idBook));
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
       
        dispatch(saveBook(data));
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="Book">
                <img src="https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png" />
                {status === 'update-book-progress' ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='title'>Title : </label>
                            <input name='title' value={data.title} onChange={handleOnChange} />
                            <label for='type'>Description : </label>
                            <input name='type' value={data.type} onChange={handleOnChange} />
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                                <h2>Id Book {details.idBook}</h2>
                                <h1>{details.title}</h1>
                                <p>{details.type}</p>
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default Book;