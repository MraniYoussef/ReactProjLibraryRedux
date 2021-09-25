import { addSubscriptionApi, deleteSubscriptionApi, getIdMembersApi, getSubscriptionsApi, saveSubscriptionApi, searchSubscriptionApi } from "../../api/apiSubscription";
import { ADD_SUBSCRIPTION, ADD_SUBSCRIPTION_ERROR, ADD_SUBSCRIPTION_SUCCESS, DELETE_SUBSCRIPTION, DELETE_SUBSCRIPTION_ERROR, DELETE_SUBSCRIPTION_SUCCESS, FETCHING_ID_MEMBER, FETCHING_ID_MEMBERS, FETCHING_ID_MEMBERS_ERROR, FETCHING_ID_MEMBERS_SUCCESS, FETCHING_ID_MEMBER_ERROR, FETCHING_ID_MEMBER_SUCCESS, FETCHING_SUBSCRIPTIONS, FETCHING_SUBSCRIPTIONS_ERROR, FETCHING_SUBSCRIPTIONS_SUCCESS, SEARCH_SUBSCRIPTION, SEARCH_SUBSCRIPTIONS_ERROR, SEARCH_SUBSCRIPTIONS_SUCCESS, UPDATE_SUBSCRIPTION, UPDATE_SUBSCRIPTION_ERROR, UPDATE_SUBSCRIPTION_SUCCESS } from "./types";

export const fetchSubscriptions = () => {

    return async dispatch => {
        dispatch({type: FETCHING_SUBSCRIPTIONS});

        try {

            const subscriptions = await getSubscriptionsApi();
            dispatch({
                type: FETCHING_SUBSCRIPTIONS_SUCCESS,
                payload: subscriptions,

            });

        }catch(err){
            dispatch({
                type: FETCHING_SUBSCRIPTIONS_ERROR,
                payload: err,
            })
        }
    }
}
export const fetchIdMembers = () => {

    return async dispatch => {
        dispatch({type: FETCHING_ID_MEMBERS});

        try {

            const idMembers = await getIdMembersApi();
            dispatch({
                type: FETCHING_ID_MEMBERS_SUCCESS,
                payload: idMembers,

            });

        }catch(err){
            dispatch({
                type: FETCHING_ID_MEMBERS_ERROR,
                payload: err,
            })
        }
    }
}

export const deleteSubscription = id => {
    return async dispatch => {
        
        dispatch({type: DELETE_SUBSCRIPTION});
        try {
        await deleteSubscriptionApi(id) ;
            dispatch({
                type: DELETE_SUBSCRIPTION_SUCCESS,
                payload: id,
            });
        }catch(err){
            dispatch({
                type: DELETE_SUBSCRIPTION_ERROR,
                payload: err,
            })
        }
    }
}

export const addSubscription = data => {
    return async dispatch => {
        
        dispatch({type: ADD_SUBSCRIPTION});
        try {
        const subscription = await addSubscriptionApi(data) ;
            dispatch({
                type: ADD_SUBSCRIPTION_SUCCESS,
                payload: {...data, subscription}
            });
        }catch(err){
            dispatch({
                type: ADD_SUBSCRIPTION_ERROR,
                payload: err,
            })
        }
    }
}

export const saveSubscription = data => {
    return async dispatch => {
        
        dispatch({type: UPDATE_SUBSCRIPTION});
        try {
         await saveSubscriptionApi(data) ;
            dispatch({
                type: UPDATE_SUBSCRIPTION_SUCCESS,
                payload: {data}
            });
        }catch(err){
            dispatch({
                type: UPDATE_SUBSCRIPTION_ERROR,
                payload: err,
            })
        }
    }
}

export const searchSubscription = lastName => {
    return async dispatch => {
        
        dispatch({type: SEARCH_SUBSCRIPTION});
        try {
         const subscriptions = await searchSubscriptionApi(lastName) ;
            dispatch({
                type: SEARCH_SUBSCRIPTIONS_SUCCESS,
                payload: subscriptions,
            });
        }catch(err){
            dispatch({
                type: SEARCH_SUBSCRIPTIONS_ERROR,
                payload: err,
            })
        }
    }
}