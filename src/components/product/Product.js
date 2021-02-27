import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const product = (props) => {
    // console.log(props);
    const { name,img,seller,stock,price } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by : {seller}</small></p>
                <p><small>Only : {stock} left in stock order soon</small></p>
                <p><small>$ {price}</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="main-btn"> <FontAwesomeIcon icon={faShoppingCart} />  add to card</button>
            </div>  
        </div>

    );
};

export default product;