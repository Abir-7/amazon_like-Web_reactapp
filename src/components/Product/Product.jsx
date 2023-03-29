import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.products)
    const { name, price, seller, ratings, img } = props.products
    const addToCart=props.addToCart;
    return (
        <div className='product'>
                    <img src={img} alt="" />
                <div className='product-info'>
                        <div className='p_name_div'> 
                           <p className='p_name'>{name}</p>
                           <p className='p_price'>Price: ${price}</p>
                           </div>
     
                    <p className='p-seller'>Manufacturer : {seller}</p>
                    <p className='p-rating'>Rating : {ratings}</p>
                </div>

            <button onClick={()=>addToCart(props.products)} className='btn_atc'>
                Add to Cart <span> <FontAwesomeIcon icon={faShoppingCart} /></span>  
</button>
        </div>
    );
};

export default Product;