import { useSelector } from "react-redux";
import './AlertSubscription.css';

export default function AlertSubscription(){

    const {reducerSubscription} = useSelector(state => state);
    const messages = {

        'add-subscription-error' : 'Error while adding subscription',
        'add-subscription-success' : 'Subscription added successfully',
        'update-subscription-error' : 'Error while updating subscription',
        'update-subscription-success' : 'Subscription updated successfully',
        'fetching-subscriptions-error' : 'Error while fetching subscriptions',
        'fetching-subscriptions-success' : 'Subscriptions loaded successfully', 
        'delete-subscription-error' : 'Error while deleting subscription',
        'delete-subscription-success' : 'Subscription deleted successfully',
    }

    return (
        <div className="AlertSubscription">{reducerSubscription.status && messages[reducerSubscription.status]}</div>
    )
}