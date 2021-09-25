import { ADD_SUBSCRIPTION, ADD_SUBSCRIPTION_ERROR, ADD_SUBSCRIPTION_SUCCESS, DELETE_SUBSCRIPTION, DELETE_SUBSCRIPTION_ERROR, DELETE_SUBSCRIPTION_SUCCESS, FETCHING_ID_MEMBERS, FETCHING_ID_MEMBERS_ERROR, FETCHING_ID_MEMBERS_SUCCESS, FETCHING_SUBSCRIPTIONS, FETCHING_SUBSCRIPTIONS_ERROR, FETCHING_SUBSCRIPTIONS_SUCCESS, SEARCH_SUBSCRIPTION, SEARCH_SUBSCRIPTIONS_ERROR, SEARCH_SUBSCRIPTIONS_SUCCESS, UPDATE_SUBSCRIPTION, UPDATE_SUBSCRIPTION_ERROR, UPDATE_SUBSCRIPTION_SUCCESS } from "./types";

const initialStateSubscription = {
    subscriptions: [],
    status: null,
    error: null,
    idMembers: [],
}


const reducerSubscription  = (state = initialStateSubscription, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCHING_SUBSCRIPTIONS: {
            return {
                ...state,
                status: 'fetching-subscriptions-progress',
            }
        }
        case FETCHING_SUBSCRIPTIONS_ERROR: {
            return {
                ...state,
                status: 'fetching-subscriptions-error',
                error: payload,
            }
        }
        case FETCHING_SUBSCRIPTIONS_SUCCESS: {
            return {
                ...state,
                status: 'fetching-subscriptions-success',
                subscriptions: payload,
            }
        }
        case FETCHING_ID_MEMBERS: {
            return {
                ...state,
                status: 'fetching-id-members-progress',
            }
        }
        case FETCHING_ID_MEMBERS_ERROR: {
            return {
                ...state,
                status: 'fetching-id-members-error',
                error: payload,
            }
        }
        case FETCHING_ID_MEMBERS_SUCCESS: {
            return {
                ...state,
                status: 'fetching-id-members-success',
                idMembers: payload,
            }
        }

        case DELETE_SUBSCRIPTION: {
            return {
                ...state,
                status: 'delete-subscription-progress',
            }
        }
        case DELETE_SUBSCRIPTION_ERROR: {
            return {
                ...state,
                status: 'delete-subscription-error',
                error: payload,
            }
        }
        case DELETE_SUBSCRIPTION_SUCCESS: {
            return {
                ...state,
                status: 'delete-subscription-success',
                subscriptions: [...state.subscriptions.filter(subscription => subscription.id !== payload)]
            }
        }

        case ADD_SUBSCRIPTION: {
            return {
                ...state,
                status: 'add-subscription-progress',
            }
        }
        case ADD_SUBSCRIPTION_ERROR: {
            return {
                ...state,
                status: 'add-subscription-error',
                error: payload,
            }
        }
        case ADD_SUBSCRIPTION_SUCCESS: {
            return {
                ...state,
                status: 'add-subscription-success',
                subscriptions: [...state.subscriptions, payload],
            }
        }
        case UPDATE_SUBSCRIPTION: {
            return {
                ...state,
                status: 'update-subscription-progress',
            }
        }
        case UPDATE_SUBSCRIPTION_ERROR: {
            return {
                ...state,
                status: 'update-subscriptions-error',
                error: payload,
            }
        }
        case UPDATE_SUBSCRIPTION_SUCCESS: {
            const newSubscriptions = [...state.subscriptions];
            const subscription = newSubscriptions.find(subscription => subscription.id === payload.id);
            subscription.member = payload.member;
            return {
                ...state,
                status: 'update-subscription-success',
                subscriptions: [...newSubscriptions],
            }
        }

        case SEARCH_SUBSCRIPTION: {
            return {
                ...state,
                status: 'search-subscription-progress',
            }
        }
        case SEARCH_SUBSCRIPTIONS_ERROR: {
            return {
                ...state,
                status: 'search-subscription-error',
                error: payload,
            }
        }
        case SEARCH_SUBSCRIPTIONS_SUCCESS: {
            
            return {
                ...state,
                status: 'update-subscription-success',
                subscriptions: [...payload],
            }
        }
        
        default : {
            return state;
        }
    }
}
export default reducerSubscription;