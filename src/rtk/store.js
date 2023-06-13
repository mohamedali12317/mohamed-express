import { configureStore } from '@reduxjs/toolkit'

import bankSlice from './Slice/bank-Slice'
import ProudctReducer from './Slice/Proudct-slice'
import { FetchGetCatagry } from './Slice/Proudct-slice'

import { CartSlice } from './Slice/CartSlice'
import ProductDetalis from '../compoents/ProductDetalis'
export const store = configureStore({
  reducer: {
    bank : bankSlice , // like bank reducer 
    // products : ProudctReducer // like bank reducer 
    products: ProudctReducer, // قم بتحديث هذا السطر
    cart : CartSlice.reducer ,
    GetCatagry : FetchGetCatagry ,
  },
})

