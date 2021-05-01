import React from 'react';
import img_carrito from './carrito.png';

const CartWidget = () => {

    return(
        <div>
            <img src={img_carrito} alt="" style={{width: 25}} className="carrito"/>
        </div>
    )
}

export default CartWidget