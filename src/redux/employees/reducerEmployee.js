import { ADD_EMPLOYEE, ADD_EMPLOYEE_ERROR, ADD_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE, DELETE_EMPLOYEE_ERROR, DELETE_EMPLOYEE_SUCCESS, FETCHING_EMPLOYEES, FETCHING_EMPLOYEES_ERROR, FETCHING_EMPLOYEES_SUCCESS, SEARCH_EMPLOYEE, SEARCH_EMPLOYEES_ERROR, SEARCH_EMPLOYEES_SUCCESS, UPDATE_EMPLOYEE, UPDATE_EMPLOYEE_ERROR, UPDATE_EMPLOYEE_SUCCESS } from "./types";

const initialStateEmployee = {
    employees: [],
    status: null,
    error: null,
}


const reducerEmployee  = (state = initialStateEmployee, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCHING_EMPLOYEES: {
            return {
                ...state,
                status: 'fetching-employees-progress',
            }
        }
        case FETCHING_EMPLOYEES_ERROR: {
            return {
                ...state,
                status: 'fetching-employees-error',
                error: payload,
            }
        }
        case FETCHING_EMPLOYEES_SUCCESS: {
            return {
                ...state,
                status: 'fetching-employees-success',
                employees: payload,
            }

        }

        case DELETE_EMPLOYEE: {
            return {
                ...state,
                status: 'delete-employee-progress',
            }
        }
        case DELETE_EMPLOYEE_ERROR: {
            return {
                ...state,
                status: 'delete-employee-error',
                error: payload,
            }
        }
        case DELETE_EMPLOYEE_SUCCESS: {
            return {
                ...state,
                status: 'delete-employees-success',
                employees: [...state.employees.filter(employee => employee.idEmployee !== payload)]
            }
        }

        case ADD_EMPLOYEE: {
            return {
                ...state,
                status: 'add-employee-progress',
            }
        }
        case ADD_EMPLOYEE_ERROR: {
            return {
                ...state,
                status: 'add-employee-error',
                error: payload,
            }
        }
        case ADD_EMPLOYEE_SUCCESS: {
            return {
                ...state,
                status: 'add-employee-success',
                employees: [...state.employees, payload],
            }
        }
        case UPDATE_EMPLOYEE: {
            return {
                ...state,
                status: 'update-employee-progress',
            }
        }
        case UPDATE_EMPLOYEE_ERROR: {
            return {
                ...state,
                status: 'update-employee-error',
                error: payload,
            }
        }
        case UPDATE_EMPLOYEE_SUCCESS: {
            const newEmployees = [...state.employees];
            const employee = newEmployees.find(employee => employee.idEmployee === payload.idEmployee);
            employee.firstName = payload.firstName;
            employee.lastName = payload.lastName;
            return {
                ...state,
                status: 'update-employee-success',
                employees: [...newEmployees],
            }
        }

        case SEARCH_EMPLOYEE: {
            return {
                ...state,
                status: 'search-employee-progress',
            }
        }
        case SEARCH_EMPLOYEES_ERROR: {
            return {
                ...state,
                status: 'search-employee-error',
                error: payload,
            }
        }
        case SEARCH_EMPLOYEES_SUCCESS: {
            
            return {
                ...state,
                status: 'update-employee-success',
                employees: [...payload],
            }
        }
        
        default : {
            return state;
        }
    }
}
export default reducerEmployee;