import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSubscription, saveSubscription } from '../../../redux/subscriptions/actions';
import './Subscription.css';

function Subscription({details}){
    const {status} = useSelector(state => state);
    const dispatch = useDispatch();
    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });

    const handleOnDeleteClick = () => {
        dispatch(deleteSubscription(details.idSubscription));
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
       
        dispatch(saveSubscription(data));
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="Subscription">
                <img src="https://www.1-ter-net.com/wp-content/uploads/2013/10/3a470e3e8591ddbc4a6366b19435fd50.gif" />
                {status === 'update-subscription-progress' ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='idMember'>Id Subscription : </label>
                            <input name='idMember' value={data.member.idMember} onChange={handleOnChange} />
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                                 <h1><label >Id Member : {details.member.idMember}  Name Member : {details.member.lastName}</label></h1>
                                <p><label >Blockage Days Period : {details.BlockageDaysPeriod}</label></p> 
                                <p>{details.unblockDate && ( <label >Unblock Date :   {details.unblockDate}</label>)}</p> 
                               <p><label >Is Blocked  : {details.isBlocked ? <p>this subscription is blocked</p> : <>No</>}</label></p> 
                               <p><label >Date Membership : {details.dateMembership}</label></p>
                               <p><label >Price : {details.price}</label></p>
                                     
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default Subscription;