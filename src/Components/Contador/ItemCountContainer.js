import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext/cartContext'


const ItemCountContainer = ({datos, stock}) => {
    const [stockTotal, setStockTotal] = useState(stock);
    const [stockUser, setStockUsser] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo, setActivo] = useState(false);
    const count = stockUser;
    const {addItems, items} = useCartContext();

    useEffect(() => {
        console.log(stock);
        if(stockTotal === 0) {
            setBotonActivo(false);
            if(stockUser > 0){
                setBotonActivo(true);
            }
        }
    }, [stockTotal, stockUser, stock])

    const sumar = () => {
        if(stockTotal > 0) {
            setStockUsser(stockUser + 1);
            setStockTotal(stockTotal - 1);
            setActivo(true)
        }
    }

    const restar = () => {
        if(stockUser === 0){
            setActivo(false);
            setStockUsser(0);
        }
        else if(stockTotal >= 0 ){
        setStockUsser(stockUser - 1);
        setStockTotal(stockTotal + 1);
        }
    }

    const onAdd = (count) => {
        addItems(count, datos)
        items.length !== null ? console.log('Agregaste al carrito') : console.log('Error')
    }

    return (
        <ItemCount stockUser={stockUser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>
    )
}

export default ItemCountContainer;