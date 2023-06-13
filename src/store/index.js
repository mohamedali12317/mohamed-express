// import { legacy_createStore } from 'redux';
import { createStore , combineReducers , applyMiddleware} from 'redux';

import { Bank_reducer } from './reducers/Bank_reducer';

import { Product_reducer } from './reducers/Products-reducers';
import thunk from 'redux-thunk';

// export const store = createStore(Bank_reducer);

let app_reducer = combineReducers ({
 bank : Bank_reducer,
 product :Product_reducer
});

// export const store = createStore(app_reducer);

export const store = createStore(app_reducer , applyMiddleware(thunk));
