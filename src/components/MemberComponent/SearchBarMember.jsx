import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMembers, searchMember } from "../../redux/members/actions";

function SearchBarMember(){
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
            dispatch(searchMember(text));
         } 
        else {
            dispatch(fetchMembers());
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

export default SearchBarMember;