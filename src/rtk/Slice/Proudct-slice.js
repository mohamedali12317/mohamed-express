import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const FetchProducts = createAsyncThunk ('productSlice/FetchProducts' , async () => {
  let res = await fetch('http://localhost:3001/products');
  let data = await res.json();
  console.log(data);
  return data;
 });

 export const FetchGetCatagry = createAsyncThunk ('productSlice/FetchGetCatagry' , async () => {
  let res = await fetch('http://localhost:3001/Categories');
  let data = await res.json();
  console.log(data);
  return data;
 });

//  export const DeleteProducts = createAsyncThunk ('productSlice/DeleteProducts' , async () => {
//   // let res = await fetch(`http://localhost:3001/products/${productid}`);
//   let res = await fetch(`http://localhost:30001/products/${product.id}`);
  
//   let data = await res.json();
//   console.log(data);
//   return data;
//  });

 


const ProudctSlice = createSlice ({
 // initialState : [], // دى لو انا عايز اخالى الاراى فاضى
 initialState : [{id : 1 , title : 'product-1'}], 
 name : 'productSlice',

 reducers :{
  addProduct : (state , action) => {
    console.log(action);
    state.push(action.payload);
  },  

 } , 

 extraReducers : (builder) => {
  builder.addCase(FetchProducts.fulfilled , (state , action) => {
    console.log(action);
    return state = action.payload;
  } )
 }



})

export const {addProduct} = ProudctSlice.actions;

export default ProudctSlice.reducer;

