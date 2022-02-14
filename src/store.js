import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import shipReducer from './reducers/ships';
//import notificationReducer from './reducers/notification'

const reducer = combineReducers({
  ships: shipReducer,
  //notification: notificationReducer,
});

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
));