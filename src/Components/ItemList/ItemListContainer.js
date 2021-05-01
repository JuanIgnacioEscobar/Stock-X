import React, { useState, useEffect } from 'react';
import Item from './Item'
import '../../Style/item.css'

const ItemListContainer = () => {
    const [ arrayItems, setArrayItems ] = useState([]);
    useEffect(() => {
        const productos = [
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
        const productosPromise = new Promise ((resolve, reject) => {
            resolve(productos)
        });
        productosPromise.then((res) => {
            setArrayItems(res)
        })
        .catch(() => {
            console.log('Oops, Hubo un error');
        })
        .finally(() => {
            console.log('Fin');
        })
    }, [])

    return (
        <React.Fragment>
            <div className="cards">
                {
                    arrayItems.map((dato) =>
                    <div key={dato.id}>
                        <Item img={dato.img} title={dato.title} precio={dato.precio} stock={dato.stock} id={dato.id}/>
                    </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer