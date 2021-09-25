import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubscription, fetchIdMembers } from "../../redux/subscriptions/actions";

function AddSubscriptionForm(){
    const {reducerSubscription, status, error} = useSelector(state => state);

    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ });
    const [errors, setErrors] = useState({ }) 
    useEffect(() => {
         dispatch(fetchIdMembers());
     }, []);
    const handleInputChange = e => {
        const{name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddSubscription = () => {
        setErrors({
            ...errors,
            idMember: !formState.idMember ? 'idMember is required' : null,

        });
        
        if(formState.idMember ){
            dispatch(addSubscription(formState))
            setErrors({})
        }
        
    }

    return (
        <div>
           <label>Id Member : </label>
            <select defaultValue={reducerSubscription.idMembers && reducerSubscription.idMembers[0]} name='idMember' onChange={handleInputChange}>{reducerSubscription.idMembers?.map(idMember => <option key={idMember} value={idMember}>{idMember}</option>)}</select >

        
        
            <button onClick={handleAddSubscription}>Add</button>
        </div>
    )
}
export default AddSubscriptionForm;