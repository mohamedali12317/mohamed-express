export let add_product = 'add_product';

export let AddProduct = (product) => {

 return {
  type :  add_product,  
  payload : product
 
 } // return
 
 };

export let get_Product = 'get_Product';

export let getProduct = (products) => {
  return {
      type : get_Product,
      payload : products
    }
 };

export let FetchgetProduct =  () => {

  return async (dispatch) => {
   let res = await fetch('https://fakestoreapi.com/products/');
   let data = await res.json();
   console.log(data);
   dispatch(getProduct(data)); 
  } // async
 
  };