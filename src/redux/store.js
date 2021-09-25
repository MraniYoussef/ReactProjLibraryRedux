import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerEmployee from './employees/reducerEmployee';
import reducerMember from './members/reducerMember';
import reducerSubscription from './subscriptions/reducerSubscription';
import reducerBookReservation from './bookReservations/reducerBookReservation';
import reducer from './books/reducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    reducer,
    reducerEmployee,
    reducerMember,
    reducerSubscription,
    reducerBookReservation
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;