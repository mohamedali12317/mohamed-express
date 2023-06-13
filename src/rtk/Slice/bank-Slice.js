import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

export const BankSlice = createSlice ({
 initialState : 1000, 
 name : 'BankSlice',
 reducers :{
  withdraw : (state , action) => {
   return state = state - action.payload
  }, 
  deposit : (state , action) => {
  return state = state + action.payload
 }

 }
 
})

export const {withdraw , deposit} = BankSlice.actions;

export default BankSlice.reducer;
