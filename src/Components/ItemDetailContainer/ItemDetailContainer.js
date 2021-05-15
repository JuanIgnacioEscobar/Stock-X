import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from '../Loading/Loading';
import { useCartContext } from '../CartContext/cartContext';
import ItemCountContainer from '../Contador/ItemCountContainer'


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const [addItems, items] = useCartContext();
    const { id } = useParams();

    useEffect(() => {
        const detalles = [
            {
                id: '01234a',
                title: 'Air Force 1',
                precio: '$12.000',
                img: 'https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611163779&fit=clip&fm=webp&ixlib=react-9.0.3&w=1246',
                stock: 10
            },
            {
                id: '01234b',
                title: 'Adidas Ozweego',
                precio: '$10.000',
                img: 'https://stockx-360.imgix.net/adidas-Ozweego-Bliss/Images/adidas-Ozweego-Bliss/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1609422252&fit=clip&fm=webp&ixlib=react-9.0.3&w=1246',
                stock: 20
            },
            {
                id: '01234c',
                title: 'Jordan 4',
                precio: '$20.000',
                img: 'https://stockx-360.imgix.net/Air-Jordan-4-Retro-Fire-Red-2020/Images/Air-Jordan-4-Retro-Fire-Red-2020/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606762588&fit=clip&fm=webp&ixlib=react-9.0.3&w=1246',
                stock: 5
            }
        ]
        const detallesPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(detalles)
            }, 2000);
        })
        detallesPromise.then(dato => {
            const itemFilterFind = dato.find (item => item.id === `${id}`)
            setDatos(itemFilterFind)
        })
    }, [id])

    const onAdd = (count) => {
        addItems(count, datos)
    }

    return (
        <React.Fragment>
            <div>
                {datos.length == null ? <ItemDetail datos={datos}/> : <Loading />}
                {<ItemCountContainer datos={datos} onAdd={onAdd}></ItemCountContainer>}
            </div>
        </React.Fragment>
    )
}

export default ItemDetailContainer