import React from 'react';
import { Button } from 'react-bootstrap';
import '../../Style/item.css'

const ItemCount = ({ id, stockUser, stockTotal, sumar, restar, botonActivo, activo, onAdd, count}) => {

    return (
        <React.Fragment>
            <div className="contadorItemDetail">
                <p id={id}>Stock: {stockTotal}</p>
                <div className="contador">
                    <Button onClick={restar} disabled={!botonActivo}>-</Button>
                    <p>{stockUser}</p>
                    <Button onClick={sumar} disabled={!botonActivo}>+</Button>
                </div>
            </div>
            <div>
                <Button onClick={() => onAdd(count)} disabled={!activo}>Agregar al carrito</Button>
            </div>
        </React.Fragment>
    )
}

export default ItemCount