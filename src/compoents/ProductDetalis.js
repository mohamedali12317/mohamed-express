import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import {  createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector , useDispatch} from 'react-redux';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AddToCard } from '../rtk/Slice/CartSlice';
import { Image } from 'react-bootstrap';

import { Helmet } from 'react-helmet-async';


const ProductDetalis = () => {

 let {productid} = useParams();
 // const produt = useSelector(state => state.produt); // قم بتحديث هذا السطر


 let [produt , setprodut] = useState({});

 useEffect(() => {
  fetch(`http://localhost:3001/products/${productid}`).then(res => res.json()).then(result => {
    console.log(result) ;
    setprodut(result) ;
  }); 
 }, []);

 //  const FetchProductDetalis = createAsyncThunk ('productSlice/FetchProductDetalis' , async () => {
 //  let res = await fetch(`http://localhost:3001/products/${productid}`);
 //  let data = await res.json();
 //  console.log(data);
 //  return data;
 // });


 return (
  <>
    <Helmet>
    <title>Product Detalis</title>
    <meta name="description" content="Product Detalis" />
  </Helmet>
   <div className="container">
    <div className="row py-5 justify-content-center">
    <div className="col-10">
    {/* <h1>ProdutDetalis #{productid}</h1>     */}
    <Image src={produt.image} className='card-imgs' style={{maxWidth  : '100%'}}  alt="" />
    <h4 className='mt-5'>{produt.title}</h4>   
    <p className='mt-3'>{produt.description}</p>
    <p className='mt-3'>{produt.price} RON</p>   
    
     </div>

     
    </div>
   </div>
  </>
 );
}

export default ProductDetalis;
