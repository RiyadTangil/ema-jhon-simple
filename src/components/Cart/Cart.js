import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    //    const total = cart.reduce((total,prd)=>total +prd.price ,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }
    const tax = (total *.10).toFixed(2);
    const grandTotal = (total + shipping +Number(tax)).toFixed(2);
    const formatNumber =num =>{
        const procision = num.toFixed(2);
        return Number(procision);
    }

    return (
        <div>
            <h4>cart summerey</h4>
            <h5>Items oredered : {cart.length}</h5>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>shipping Cost: {shipping}</small></p>
            <p><small>tax + VAT :{tax}</small></p>
            <h5>Total Price : {grandTotal}</h5>
        </div>
    );
};

export default cart;