import React from 'react';
import "./Products.css";
import BuyButton from './BuyButton';
function Products ({ProductName, Description, Price = 1}) {
   return (
   <>
   <div className='OuterDiv'>
    <div className="Product">
        <header>{ProductName}</header>
        <img src='https://m.media-amazon.com/images/I/61hzuoXwjqL._AC_UF1000,1000_QL80_.jpg'/>
        <p>Description: {Description}</p>
        <p>Price : {Price}</p>
        <BuyButton className="Buy"/>
    </div>
    
    </div>
    </>
    )
}
export default Products