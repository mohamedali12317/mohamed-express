


export let deposit_money = 'deposit_money';

export let withdraw_money = 'withdraw_money';

export let deposit = (amount) => {

 return {
  type :  deposit_money,  
  payload : amount
 
 } // return
 
 };

 export let withdraw = (amount) => {

  return {
   type : withdraw_money ,  
   payload : amount
  
  } // return
  
  };