import React, { useState, useEffect } from 'react';
import Item from './Item'
import '../../Style/item.css'
import { getFirestore } from '../../firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [ arrayItems, setArrayItems ] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore();
        let itemsFilter = '';
        if(id) {
            itemsFilter = db.collection("items").where("categoryId", "==", id)
        }else{
            itemsFilter = db.collection("items")
        }
        itemsFilter.get()
        .then((querySnapShot) => {
            querySnapShot.size === 0 ? console.log('No hay items') : console.log(`Hay ${querySnapShot.size} items`);
            const documentos = querySnapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setArrayItems(documentos)
        })
        .catch((err) => console.log('Oops hubo un error', err))
        .finally(() => console.log('Cargo exitosamente'))
    }, [id])

    useEffect(() => {
        arrayItems.length && console.log(arrayItems);
    }, [arrayItems])
    
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