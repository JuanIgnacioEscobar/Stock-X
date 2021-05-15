import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';

const ItemCountContainer = ({datos, onAdd}) => {
    const [stockTotal, setStockTotal] = useState(datos.stockTotal);
    const [stockUser, setStockUsser] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo, setActivo] = useState(false);
    const count = stockUser;

    useEffect(() => {
        if(stockTotal === 0) {
            setBotonActivo(false);
            if(stockUser > 0){
                setBotonActivo(true);
            }
        }
    }, [stockUser,stockTotal])

    const sumar = () => {
        if(stockTotal > 0) {
            setStockUsser(stockUser + 1);
            setStockTotal(stockTotal - 1);
            setActivo(true)
        }
    }

    const restar =()=>{
        if(stockUser === 0){
            setActivo(false)
            setStockUsser(0);
        }
        else if(stockTotal >= 0 ){
        setStockUsser( stockUser - 1);
        setStockTotal(stockTotal + 1)
        }
    }

    return (
        <ItemCount id={datos.id} stockUser={stockUser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>
    )
}

export default ItemCountContainer;