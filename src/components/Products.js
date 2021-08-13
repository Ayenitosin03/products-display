import React from 'react' 
import {products} from './data';
import './Products.css'
function Products () {
    return (
        <div className='product'>
            {products.map((product) =>
                <div className= "items">
                    <img src={product.product_img} alt="ima" className='product-img'/ >
                    <h1 className='product-name'> {product.name} </h1>
                    <h1 className='product-price'>  &#8358;{ product.price}</h1>
                </div> )} 
        </div>
    )
}

export default Products
