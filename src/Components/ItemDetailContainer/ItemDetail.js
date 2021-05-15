import React from 'react';
import '../../Style/itemDetail.css';

const ItemDetail = ({datos}) => {

    return (
        <div key={datos.id} className="detailCard">
            <div>
                <img src={datos.img} alt="" className="detail-img"/>
            </div>
            <div className="descripcion">
                <h2>{datos.title}</h2>
                <h4>{datos.precio}</h4>
            </div>
        </div>
    )
}

export default ItemDetail