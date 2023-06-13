import { get_Product , add_product } from "./Products-actions";

export let Product_reducer = (state = [{id: "1" , title: "product-1"}] , action) => {
 switch (action.type) {

   case get_Product :
    //  console.log(action.payload);
    return [...state , ...action.payload] ;

    case add_product :
      return [ ...state , action.payload] ;
   

  default: return state;
  
 }

}