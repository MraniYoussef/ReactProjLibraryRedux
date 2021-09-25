import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscriptions } from "../../redux/subscriptions/actions";
import Subscription from "./Subscription/Subscription";

function SubscriptionList(){

    const {reducerSubscription, status, error} = useSelector(state => state);
    const dispatch = useDispatch();
     useEffect(() => {
     dispatch(fetchSubscriptions());
  }, []);


    return (
        <div>
             {status === 'fetching-subscriptions-progress' && <div>Loading...</div>}
             {reducerSubscription.subscriptions.length && reducerSubscription.subscriptions.map(subscription => <Subscription key={subscription.idSubscription} details={subscription} />)}
             {status === 'fetching-subscriptions-error' && <div>Error : {error}</div>}

           
        </div>
    )
}
export default SubscriptionList;