import { addEmployeeApi, deleteEmployeeApi, getEmployeesApi, saveEmployeeApi, searchEmployeeApi } from "../../api/apiEmployees";
import { ADD_EMPLOYEE, ADD_EMPLOYEE_ERROR, ADD_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE, DELETE_EMPLOYEE_ERROR, DELETE_EMPLOYEE_SUCCESS, FETCHING_EMPLOYEES, FETCHING_EMPLOYEES_ERROR, FETCHING_EMPLOYEES_SUCCESS, SEARCH_EMPLOYEE, SEARCH_EMPLOYEES_ERROR, SEARCH_EMPLOYEES_SUCCESS, UPDATE_EMPLOYEE, UPDATE_EMPLOYEE_ERROR, UPDATE_EMPLOYEE_SUCCESS } from "./types";

export const fetchEmployees = () => {

    return async dispatch => {
        dispatch({type: FETCHING_EMPLOYEES});

        try {

            const employees = await getEmployeesApi();
            dispatch({
                type: FETCHING_EMPLOYEES_SUCCESS,
                payload: employees,
            });

        }catch(err){
            dispatch({
                type: FETCHING_EMPLOYEES_ERROR,
                payload: err,
            })
        }
    }
}

export const deleteEmployee = idEmployee => {
    return async dispatch => {
        
        dispatch({type: DELETE_EMPLOYEE});
        try {
        await deleteEmployeeApi(idEmployee) ;
            dispatch({
                type: DELETE_EMPLOYEE_SUCCESS,
                payload: idEmployee,
            });
        }catch(err){
            dispatch({
                type: DELETE_EMPLOYEE_ERROR,
                payload: err,
            })
        }
    }
}

export const addEmployee = data => {
    return async dispatch => {
        
        dispatch({type: ADD_EMPLOYEE});
        try {
        const employee = await addEmployeeApi(data) ;
            dispatch({
                type: ADD_EMPLOYEE_SUCCESS,
                payload: {...data, employee}
            });
        }catch(err){
            dispatch({
                type: ADD_EMPLOYEE_ERROR,
                payload: err,
            })
        }
    }
}

export const saveEmployee = data => {
    return async dispatch => {
        
        dispatch({type: UPDATE_EMPLOYEE});
        try {
         await saveEmployeeApi(data) ;
            dispatch({
                type: UPDATE_EMPLOYEE_SUCCESS,
                payload: {data}
            });
        }catch(err){
            dispatch({
                type: UPDATE_EMPLOYEE_ERROR,
                payload: err,
            })
        }
    }
}

export const searchEmployee = lastName => {
    return async dispatch => {
        
        dispatch({type: SEARCH_EMPLOYEE});
        try {
         const employees = await searchEmployeeApi(lastName) ;
            dispatch({
                type: SEARCH_EMPLOYEES_SUCCESS,
                payload: employees,
            });
        }catch(err){
            dispatch({
                type: SEARCH_EMPLOYEES_ERROR,
                payload: err,
            })
        }
    }
}