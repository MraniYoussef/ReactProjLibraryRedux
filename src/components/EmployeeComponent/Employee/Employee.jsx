import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, saveEmployee } from '../../../redux/employees/actions';
import './Employee.css';

function Employee({details}){
    const {status} = useSelector(state => state);
    const dispatch = useDispatch();

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });

    const handleOnDeleteClick = () => {
        dispatch(deleteEmployee(details.idEmployee));
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
       
        dispatch(saveEmployee(data));
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="Employee">
                <img src="https://us.123rf.com/450wm/dervish37/dervish371612/dervish37161200053/69147723-l-homme-dans-la-biblioth%C3%A8que-concept-de-l-%C3%A9ducation-la-lecture-dans-la-biblioth%C3%A8que-une-illustration.jpg?ver=6" />
                {status === 'update-Employee-progress' ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='firstName'>Last Name : </label>
                            <input name='firstName' value={data.firstName} onChange={handleOnChange} />
                            <label for='lastName'>Last Name : </label>
                            <input name='lastName' value={data.lastName} onChange={handleOnChange} />
                            <label for='password'>Password : </label>
                            <input name='password' value={data.password} onChange={handleOnChange} />
                            <label for='cin'>CIN : </label>
                            <input name='cin' value={data.cin} onChange={handleOnChange} />
                            <label for='cin'>Email : </label>
                            <input name='email' value={data.email} onChange={handleOnChange} />
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                                <h1>{details.firstName}</h1>
                                <p>{details.lastName}</p>
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default Employee;