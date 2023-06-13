import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector , useDispatch } from 'react-redux';
import Products from './products';
import { Button, Image } from 'react-bootstrap';
import { DeleteFromCard , Clear } from '../rtk/Slice/CartSlice';
import { Helmet } from 'react-helmet-async';

const Cart = () => {

  const cart = useSelector ((state) =>state.cart);

  const dispatch = useDispatch() ;

console.log(cart);

let totalPrice = cart.reduce((acc, product) => {
  acc += product.price * product.quantity; ; 
  return acc
},0)

 return (
  <>
    <Helmet>
    <title>Cart</title>
    <meta name="description" content="Cart" />
  </Helmet>
  <div className="container">
  <h1 className="py-5 mt-5">Welcome to Cart</h1>
  <div className="d-flex flex-column align-items-start mb-3">
  <Button variant="primary" className="mb-5 " onClick={() => dispatch( Clear () ) }>Clear Cart</Button>
  <h5>total Price : {totalPrice.toFixed(2)} RON</h5>
  </div>
  <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th> 
          <th>actions</th> 
        </tr>
      </thead>
      <tbody>
      {
        cart.map ((product) => (
              <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td> <Image src={product.image} style={{width : "100px" }} /> </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td><Button variant="danger" onClick={() => dispatch( DeleteFromCard (product) ) }>Delete</Button></td>
            </tr>
        ))
      }
       
      </tbody>
    </Table>
  </div>
   
  </>
 );
}

export default Cart;
