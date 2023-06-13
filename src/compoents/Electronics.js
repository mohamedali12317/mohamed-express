import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
// import { AddProduct , FetchgetProduct } from '../store/reducers/Products-actions';
import { useEffect } from 'react';
import {  FetchProducts} from '../rtk/Slice/Proudct-slice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AddToCard } from '../rtk/Slice/CartSlice';
import "./product.css"
import NavbarProduct from './NavbarProduct';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Electronics = () => {
 const products = useSelector(state => state.products);

 const dispatch = useDispatch();

 useEffect(() => {

  dispatch(FetchProducts());


 }, []);

 return (
  <>
    <Helmet>
    <title>Electronics</title>
    <meta name="description" content="Electronics" />
  </Helmet>
     <NavbarProduct/>
      <h1 className="mt-5 py-5 title">Man Clothing</h1>

      <div className="container">

    <div className="row py-5 product">
   
{
  
    products.filter((product) => product.category === "electronics") // تصفية المنتجات ذات الفئة "women's clothing" فقط
      .map((product) => (
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

export default Electronics;
