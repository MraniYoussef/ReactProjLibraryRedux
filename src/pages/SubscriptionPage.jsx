import { useSelector } from "react-redux";
import AlertSubscription from "../components/Alert/AlertSubscription/AlertSubscription";
import AddSubscriptionForm from "../components/SubscriptionComponent/AddSubscriptionForm";
import SearchBarSubscription from "../components/SubscriptionComponent/SearchBarSubscription";
import SubscriptionList from "../components/SubscriptionComponent/SubscriptionList";


function SubscriptionPage() {
  
    return (
      <>
         
        <AlertSubscription />
        <SearchBarSubscription  />
        <SubscriptionList  />
        <AddSubscriptionForm  />
  
      </>
    );
  }
  
  export default SubscriptionPage;