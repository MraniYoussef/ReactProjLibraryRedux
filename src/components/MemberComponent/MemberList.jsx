import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../redux/members/actions";
import Member from "./Member/Member";

function MemberList(){

    const {reducerMember, status, error} = useSelector(state => state);

    const dispatch = useDispatch();
     useEffect(() => {
     dispatch(fetchMembers());
  }, []);

    return (
        <div>
             {status === 'fetching-members-progress' && <div>Loading...</div>}
             {reducerMember.members.length && reducerMember.members.map(member => <Member key={member.idMember} details={member} />)}
             {status === 'fetching-members-error' && <div>Error : {error}</div>}

           
        </div>
    )
}
export default MemberList;