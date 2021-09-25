import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBookReservations, searchBookReservation } from "../../redux/bookReservations/actions";

function SearchBarBookReservation(){
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = e => {
        const value = e.target.value;
    setText(value);   }

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        if (text) {
            dispatch(searchBookReservation(text));
         } 
        else {
            dispatch(fetchBookReservations());
            }
    }, [text])

    const handleResetClick = e => {
        setText('');
    }

    return (
            <div>
                <input ref={inputRef} value={text} onChange={handleInputChange} />
                <button onClick={handleResetClick}>Reset</button>
            </div>
    )
}

export default SearchBarBookReservation;