import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/employees/actions";
import Employee from "./Employee/Employee";

function EmployeeList(){

    const {reducerEmployee, status, error} = useSelector(state => state);

    const dispatch = useDispatch();
     useEffect(() => {
     dispatch(fetchEmployees());
  }, []);

    return (
        <div>
             {status === 'fetching-employees-progress' && <div>Loading...</div>}
             {reducerEmployee.employees.length && reducerEmployee.employees.map(employee => <Employee key={employee.idEmployee} details={employee} />)}
             {status === 'fetching-employees-error' && <div>Error : {error}</div>}

           
        </div>
    )
}
export default EmployeeList;