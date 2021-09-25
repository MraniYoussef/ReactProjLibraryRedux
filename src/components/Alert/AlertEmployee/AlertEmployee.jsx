import { useSelector } from "react-redux";
import './AlertEmployee.css';

export default function AlertEmployee(){

    const {reducerEmployee} = useSelector(state => state);
    const messages = {

        'add-employee-error': 'Error while adding employee',
        'add-employee-success' : 'Employee added successfully',
        'update-employee-error' : 'Error while updating employee',
        'update-employee-success' : 'Employee updated successfully',
        'fetching-employees-error' : 'Error while fetching employees',
        'fetching-employees-success' : 'employees loaded successfully', 
        'delete-employee-error' : 'Error while deleting employee',
        'delete-employees-success' : 'Employee deleted successfully',
        'search-employee-error':'Error while searching employee',
        'update-employee-success':'Employee loaded successfully',
    }

    return (
        <div className="AlertEmployee">{reducerEmployee.status && messages[reducerEmployee.status]}</div>
    )
}

              
               