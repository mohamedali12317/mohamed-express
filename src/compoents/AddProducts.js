import React from 'react';

import { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

  let [title , setTitle]  = useState ('');
  let [category , setCategory]  = useState ('');
  let [price , setPrice]  = useState (0);
  let [description , setDescription]  = useState (0);
  let [image, setImage] = useState('');

  let navigate = useNavigate(); 

  let formSubmit = (e) => {
      e.preventDefault();

      console.log('title' , title);
      console.log('price' , price);
      console.log('description' , description);
      console.log('image', image);

      // axios.post('http://localhost:3000/products' , {
      //    title,
      //   price,
      //   description,
      // }).then( data => {
      //   console.log(data);
      //   navigate('/Products3');
      // })

      fetch('http://localhost:3001/products' , {
        method: 'POST',
        headers : { 'Content-Type': 'application/json'},
        body : JSON.stringify({
          // title : title,
          // price : price,
          // description : description,

          // or 
          title,
          category,
          price,
          description,
          image ,
        }),

      }).then( res => res.json())
      .then( data => {
        console.log(data);
        navigate('/Products3');
      })
  }

 return (
  <>

    <div className="col-10">
   <h1>Add Products</h1>

   <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label htmlFor="productTitle" className="form-label">
      Title
    </label>
    <input
      type="text"
      className="form-control"
      id="productTitle"
      placeholder='product title'
      aria-describedby="product title"

      onChange={(e)=> setTitle(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="productTitle" className="form-label">
    category
    </label>
    <input
      type="text"
      className="form-control"
      id="productCategory"
      placeholder='product category'
      aria-describedby="product category"

      onChange={(e)=> setCategory(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="productPrice" className="form-label">
      Price
    </label>
    <input
      type="Number"
      className="form-control"
      id="productPrice"
      placeholder='product price'
      aria-describedby="product price"

      onChange={(e)=> setPrice(e.target.value)}
    />
  </div>

  <div className="mb-3" >
    <label htmlFor="productDescription" className="form-label">Description</label>
    <input
      type="text"
      className="form-control"
      id="productDescription"
      placeholder='product description'
      aria-describedby="product description"
      required
      onChange={(e)=> setDescription (e.target.value)}
    />
  </div>

  <div className="mb-3">
  <label htmlFor="productImage" className="form-label">
    Image
  </label>
  <input
    type="url"
    className="form-control"
    id="productImage"
    placeholder="Product image URL"
    aria-describedby="product image"
    required
    onChange={(e) => setImage(e.target.value)}
  />
</div>



  <button type="submit" className="btn btn-primary">
    Add Product
  </button>
</form>

     
     </div>
     
   
  </>
 );
}

export default AddProducts;
