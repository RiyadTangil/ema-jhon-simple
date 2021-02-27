import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../product/Product'
// import product from '../product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);

    const [ cart, setCart] = useState([]);

    const handleAddProduct=(product)=>{
        console.log("add product",product);
        const newCart =  [...cart,product];
        setCart(newCart);
    }


    return (
        <div className="shop-continer">
            <div className="product-container">
          
                {
                    products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd} ></Product>)
                }
            
            </div>
            <div className="card-container">
              <Cart cart= {cart}></Cart>
            </div>

            
        </div>
    );
};

export default Shop;