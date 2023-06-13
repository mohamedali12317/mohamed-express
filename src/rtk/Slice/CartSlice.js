import React from 'react';
import { createSlice } from '@reduxjs/toolkit'


export const CartSlice = createSlice ({
 initialState : [], 
 name : 'CartSlice',

 reducers :{
  AddToCard : (state , action) => {
    console.log(action);
  let findProduct =  state.find((product) => product.id === action.payload.id)
  
  console.log('findProduct' , findProduct);
  
  // لو لقيت البرودكت دوت 

  if (findProduct) {
    findProduct.quantity += 1;
  } else {
    let productClone = {...action.payload , quantity : 1}
    state.push(productClone);
  }

    // state.push(action.payload);
  }, 
  
  DeleteFromCard : (state , action) => {
  return state.filter( (product) => product.id !== action.payload.id);
 }, 

 Clear : (state , action) => {
  return []
}, 

 } , 

})

export const {AddToCard , DeleteFromCard , Clear} = CartSlice.actions;

export default CartSlice.reducer;
