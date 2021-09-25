import AlertEmployee from "../components/Alert/AlertEmployee/AlertEmployee";
import AddEmployeeForm from "../components/EmployeeComponent/AddEmployeeForm";
import EmployeeList from "../components/EmployeeComponent/EmployeeList";
import SearchBarEmployee from "../components/EmployeeComponent/SearchBarEmployee";

function EmployeePage() {
     
    return (
      <>
         
        <AlertEmployee />
        <SearchBarEmployee  />
        <EmployeeList  />
        <AddEmployeeForm />
  
      </>
    );
  }
  
  export default EmployeePage;