import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
 
// export let store2 = Redux.createStore(Bank_reducer , Redux.applyMiddleware(ReduxThunk));

