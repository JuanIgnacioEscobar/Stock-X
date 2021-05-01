import React from 'react';
import '../../Style/itemDetail.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ItemDetail = ({datos}) => {

    return (
        <div key={datos.id} className="detailCard">
            <div>
                <img src={datos.img} alt="" className="detail-img"/>
            </div>
            <div className="descripcion">
                <h2>{datos.title}</h2>
                <p>Stock: {datos.stock}</p>
                <h4>{datos.precio}</h4>
                <Link><Button variant="primary" className="btn-primary">Agregar al carrito</Button></Link>
            </div>
        </div>
    )
}

export default ItemDetail