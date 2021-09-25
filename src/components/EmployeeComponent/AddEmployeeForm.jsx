import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employees/actions";

function AddEmployeeForm(){

    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ });
    const [errors, setErrors] = useState({ }) 

    const handleInputChange = e => {
        const{name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddEmployee = () => {
        setErrors({
            ...errors,
            firstName: !formState.firstName ? 'First Name is required' : null,
            lastName: !formState.lastName ? 'Last Name is required' : null,
        });
        
        if(formState.firstName && formState.lastName){
            dispatch(addEmployee(formState))
            setErrors({})
        }
        
    }

    return (
        <div>
            <input type="text" value={formState.firstName} name='firstName' onChange={handleInputChange} />
            {errors.firstName && <small>{errors.firstName}</small>}
            <br/>
            <input type="text" value={formState.lastName} name='lastName' onChange={handleInputChange} />
            {errors.lastName && <small>{errors.lastName}</small>}
            <br/>


            <button onClick={handleAddEmployee}>Add</button>
        </div>
    )
}
export default AddEmployeeForm;