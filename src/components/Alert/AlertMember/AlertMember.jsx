import { useSelector } from "react-redux";
import './AlertMember.css';

export default function AlertMember(){

    const {reducerMember} = useSelector(state => state);
    const messages = {

        'add-member-error': 'Error while adding member',
        'add-member-success' : 'Member added successfully',
        'update-member-error' : 'Error while updating member',
        'update-member-success' : 'Member updated successfully',
        'fetching-members-error' : 'Error while fetching members',
        'fetching-members-success' : 'Members loaded successfully', 
        'delete-member-error' : 'Error while deleting member',
        'delete-members-success' : 'Member deleted successfully',
        'search-member-error':'Error while searching member',
        'update-member-success':'Member loaded successfully',
    }

    return (
        <div className="AlertMember">{reducerMember.status && messages[reducerMember.status]}</div>
    )
}

              
               