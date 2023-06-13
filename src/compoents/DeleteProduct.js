import React, { useEffect , useState } from 'react';
// import './Pages.css'
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import Table from 'react-bootstrap/Table';
import { Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';


const DeleteProduct = () => {

 const [products, setproducts] = useState ([]);

 useEffect(() => {
  GetAllProducts ();
  
 
 }, []);


 const GetAllProducts = () => {
   fetch('http://localhost:3001/products')
   .then( res => res.json() ) 
   .then(data => {
     console.log(data);
     setproducts(data)
   } );
 }

 const DeleteProduct = (product) => {

   Swal.fire({
     title: `are u sure to delete  ${product.title} and the Id ${product.id} ? `,
     showCancelButton : true,
   }).then( data => {
   console.log(data);

   if (data.isConfirmed) {
     console.log(product);
   fetch(`http://localhost:3001/products/${product.id}` , {
     method: 'DELETE'
   })
   .then( res => res.json())
   .then( data => {
     console.log(data);
     GetAllProducts ();
   })
   }
   
   })

}

 return (
  <>
    <Helmet>
    <title>Admin</title>
    <meta name="description" content="Admin" />
  </Helmet>
      <h1>Products page</h1>

 <div className="d-flex justify-content-center">
 <Link to={'/admin/add'} className="btn btn-success mt-4 mb-4 justify-content-center">Add New Product</Link>
 </div>

 <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>description</th>
          <th>Price</th> 
          <th>actions</th> 
          <th>image</th> 
        </tr>
      </thead>
      <tbody>
      {products.map((product) => {
           return (
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description.slice(0 , 20)}...</td>
            <td>{product.price}</td>
            <td><Image src={product.image} style={{width : "100px" }}  alt="" /></td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={ () => DeleteProduct(product) } >Delete</button>
              <Link to = {`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
              {/* <Link  to={`/Products3/edit/${product.id}`} className="btn btn-primary btn-sm">Edit</Link> */}
            </td>
            </tr>
           )
        })}
       
      </tbody>
    </Table>
    <Outlet/>
  </>
 );
}

export default DeleteProduct;
