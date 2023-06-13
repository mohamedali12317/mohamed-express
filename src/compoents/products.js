import React, { useState } from 'react';
      import { useSelector , useDispatch} from 'react-redux';
// import { AddProduct , FetchgetProduct } from '../store/reducers/Products-actions';
import { useEffect } from 'react';
import {  FetchProducts} from '../rtk/Slice/Proudct-slice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AddToCard } from '../rtk/Slice/CartSlice';
import { Link } from 'react-router-dom';

import NavbarProduct from './NavbarProduct';

import "./product.css"

import { Helmet } from 'react-helmet-async';

// import { FetchGetCatagry } from '../rtk/Slice/Proudct-slice';




const Products = () => {
const products = useSelector(state => state.products); // قم بتحديث هذا السطر

const GetCatagry = useSelector(state => state.GetCatagry); // قم بتحديث هذا السطر
console.log(GetCatagry);

const bank = useSelector ((state) =>state.bank);

console.log(products);

console.log(bank);

 const dispatch = useDispatch();

 

//   const FetchGetCatagry =  (() => {
//   fetch('http://localhost:3001/Categories').then((response) => response.json()).then((data) => setCatagry(data));
//   setProducts(Product);
//   // fetch('https://fakestoreapi.com/products/categories').then((response) => response.json()).then((data) => setCatagry(data));
//  });

//  const GetProductInCatagry =  ((catName) => {
//   console.log(catName);
//   fetch(`http://localhost:3001/Categories/${catName}`).then((response) => response.json()).then((data) => setProducts(data));
//   // fetch('https://fakestoreapi.com/products/categories').then((response) => response.json()).then((data) => setCatagry(data));
//  });

//  const [catagry, setCatagry] = useState ([]);

 useEffect(() => {
  // GetProduct();

  // dispatch(FetchgetProduct());
  dispatch(FetchProducts());
  // dispatch(FetchGetCatagry());
  // FetchGetCatagry();

 }, []);



 return (

  <>
  <Helmet>
    <title>All Product</title>
    <meta name="description" content="All Product" />
  </Helmet>

   <h1 className="mt-5 py-5 title">All Products</h1>
   <div>
  <NavbarProduct/>

   </div>

  {/* <button onClick={()=>dispatch(addProduct({id : 2 , title : 'prouduct-2'}))}>add products</button> */}
{/* 
    {
    products.map((product) => (  ) )
   } 
   
    */}
   <div className="container">
   <div className="row py-5 product">


    {
    products.map((product) => (
          <div className="col-lg-4 col-md-6" key={product.id}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
          <div className="d-flex view-card"> <Link to={`/products/${product.id}`} className="btn btn-info btn-ornange">View</Link></div>
            <div className='over'></div>
            <Card.Title className='h6'>{product.title}</Card.Title>
            {/* <Card.Text>
              {product.description}
            </Card.Text> */}
           <Card.Text className='font-weight-600'> {product.price} RON</Card.Text>
            <Button className='btn-orange-40' onClick={()=>dispatch(AddToCard (product))} >Add to cart</Button>
            {/* <Link to = {`/products/${product.id}`} className="btn btn-info btn-sm">View</Link> */}
          </Card.Body>
        </Card>
        </div>

     ))
   } 

     
    </div>


   </div>

  </>
 );
}

export default Products;
