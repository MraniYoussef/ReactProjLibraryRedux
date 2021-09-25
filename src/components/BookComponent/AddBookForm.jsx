import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, fetchBooksType } from "../../redux/books/actions";

function AddBookForm(){

    const [formState, setFormState] = useState({ });
    const [errors, setErrors] = useState({ }) 
    const {status, reducer } = useSelector(state => state);
    const dispatch = useDispatch();

     useEffect(() => {

      const bookType =   dispatch(fetchBooksType());
     }, []);
console.log("reduccccc", reducer);

    const handleInputChange = e => {
        const{name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddBook = () => {
        setErrors({
            ...errors,
            title: !formState.title ? 'Title is required' : null,
            type: !formState.type ? 'Description is required' : null,
            author: !formState.author ? 'Author is required' : null,
            numberCopies: !formState.numberCopies ? 'Number Copies is required' : null,
            numberBooksAvailable: !formState.numberBooksAvailable ? 'Number Books Available is required' : null,
        });
        
        if(formState.title && formState.type && formState.author && formState.numberCopies && formState.numberBooksAvailable){
            dispatch(addBook(formState))
            setErrors({})
        }
        
    }

    return (
        <div>
            <label>Title : </label>
            <input type="text" value={formState.title} name='title' onChange={handleInputChange} />
            {errors.title && <small>{errors.title}</small>}
            <br/>
            <label>Author : </label>
            <input type="text" value={formState.author} name='author' onChange={handleInputChange} />
            {errors.author && <small>{errors.author}</small>}
            <br/>
            <label>Number Copies : </label>
            <input type="text" value={formState.numberCopies} name='numberCopies' onChange={handleInputChange} />
            {errors.numberCopies && <small>{errors.numberCopies}</small>}
            <br/>
            <label>Type : </label>
            <select defaultValue={reducer.booksType && reducer.booksType[0]} name='type' onChange={handleInputChange}>{reducer.booksType?.map(type => <option key={type} value={type}>{type}</option>)}</select >

{/*             <input type="text" value={formState.type} name='type' onChange={handleInputChange} />
 */}            {errors.type && <small>{errors.type}</small>}
            <br/>
            <label>Number Books Available : </label>
            <input type="text" value={formState.numberBooksAvailable} name='numberBooksAvailable' onChange={handleInputChange} />
            {errors.numberBooksAvailable && <small>{errors.numberBooksAvailable}</small>}
            <br/>

            <button onClick={handleAddBook}>Add</button>
        </div>
    )
}
export default AddBookForm;