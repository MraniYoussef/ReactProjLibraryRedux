import AlertMember from "../components/Alert/AlertMember/AlertMember";
import AddMemberForm from "../components/MemberComponent/AddMemberForm";
import MemberList from "../components/MemberComponent/MemberList";
import SearchBarMember from "../components/MemberComponent/SearchBarMember";

function MemberPage() {
     
    return (
      <>
         
        <AlertMember />
        <SearchBarMember  />
        <MemberList  />
        <AddMemberForm />
  
      </>
    );
  }
  
  export default MemberPage;