import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
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
                {
                    count !== 0 ? <Link to={'/cart'}><button>Ir al carrito</button></Link> : console.log('Carrito vacio')
                }
            </div>
        </React.Fragment>
    )
}

export default ItemCount