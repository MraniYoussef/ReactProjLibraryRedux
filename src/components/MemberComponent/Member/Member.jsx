import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMember, saveMember } from '../../../redux/members/actions';
import './Member.css';

function Member({details}){
    const {status} = useSelector(state => state);
    const dispatch = useDispatch();

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });

    const handleOnDeleteClick = () => {
        dispatch(deleteMember(details.idMember));
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
       
        dispatch(saveMember(data));
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="Member">
                <img src="https://www.projectcounter.org/wp-content/themes/project-counter-2016/images/icon-members.jpg" />
                {status === 'update-member-progress' ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='firstName'>Last Name : </label>
                            <input name='firstName' value={data.firstName} onChange={handleOnChange} />
                            <label for='lastName'>Last Name : </label>
                            <input name='lastName' value={data.lastName} onChange={handleOnChange} />
                            <label for='cin'>Cin : </label>
                            <input name='cin' value={data.cin} onChange={handleOnChange} />
                            <label for='address'>Address : </label>
                            <input name='address' value={data.address} onChange={handleOnChange} />
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                            <p>Id Member : {details.idMember}</p>
                                <h1>First name :{details.firstName}</h1>
                                <p>Last name :{details.lastName}</p>
                                <p>Cin : {details.cin}</p>
                                <p>Address :{details.address}</p>
                                <p>Membership date :{details.dateOfMembership}</p>
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default Member;