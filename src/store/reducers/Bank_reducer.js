import {deposit_money , withdraw_money }  from '../actions/bank-actions';

// احنا عاملين اكس بورت عشان اقدر استخدمهم فى اى مكان

export let Bank_reducer = (state = 2000 , action) => {
 switch (action.type) {
  
  case withdraw_money :
  return state - action.payload ;

   case deposit_money :
   return state + action.payload ;

  default: return state;
  
 }

}