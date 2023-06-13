import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

// import { useSelector , useDispatch} from 'react-redux';
// import { withdraw } from './store/actions/bank-actions';
// import { deposit } from './store/actions/bank-actions';
// import { withdraw  , deposit} from './rtk/Slice/bank-Slice';
import './App.css';
import Products from './compoents/products';
import AppNavbar from './compoents/AppNavbar';
import Cart from './compoents/Cart';
import { Route , Routes } from 'react-router-dom';
import ProductDetalis from './compoents/ProductDetalis';
import DeleteProduct from './compoents/DeleteProduct';
import AddProducts from './compoents/AddProducts';
import  Womens from './compoents/WomensClosthes';
import Man from './compoents/Man';
import Electronics from './compoents/Electronics';
import Jewelery from './compoents/jewelery';

function App() {
// const state = useSelector(state => state.bank);
// console.log(state);

// const dispatch = useDispatch();

  return (
    <div className="App">
   <>
        {/* <h1>
          bank account: {state}
        </h1>
        <p id="value" />
        <input type="number" placeholder="amount" id="amount" />
        <button id="withdrow" onClick={()=> dispatch(withdraw(100))}>withdrow</button>
        <button id="withdrow" onClick={()=> dispatch(deposit(100))}>deposit</button>
        <Products/> */}
        <AppNavbar/>

        <Routes>
          <Route path="/" element = {<Products/>}/>
          <Route path="/women's" element = {<Womens/>}/>
          <Route path="/man" element = {<Man/>}/>
          <Route path="/electronics" element = {<Electronics/>}/>
          <Route path="/jewelery" element = {<Jewelery/>}/>
          <Route path="/products/:productid" element = {<ProductDetalis/>}/>
          <Route path="cart" element = {<Cart/>}/>
          <Route path="/admin" element = {<DeleteProduct/>}/>
          <Route path="/admin/add" element = {<AddProducts/>}/>
        </Routes>
        
  </>
 
     </div>
  );
}

export default App;
