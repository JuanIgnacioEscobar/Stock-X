import React, { useEffect, useState, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider ({children}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(items);
    }, [items]);

    const isInCart = (id) => {
        const inCart = items.find(x => x.id === id)
        if(inCart !== undefined) {
            return true
        }
        return false
    }

    const getQuantity = (datos, count) => {
        const filtro = [...items];
        filtro.forEach(i => {
            if(i.id === datos.id) {
                if(i.qty < 5 && (i.qty + count > 5)) {
                    i.qty = 5
                }
            }
        })
        setItems(filtro)
    }

    const addItems = (count, datos) => {
        console.log(...items);
        if(isInCart(datos.id)) {
            getQuantity(datos, count)
            console.log(datos);
        }else{
            if(items.length < 4) {
                setItems([...items, {...datos, qty: count}]);
            }
        }
    };

    // function total() {
    //     const precioTotal = items.reduce((a,b) => (a + (b.precio * b.qty)),0)
    // }

    function getUnits() {
        const unid = items.reduce((a,b) => (a + b.qty),0)
        return unid
    }

    const removeItems = (item) => {
        console.log(item);
        const newItems = item.filter(x => x.id !== item);
        setItems(newItems);
    }

    const clear = () => {
        setItems([]);
    }

    return (
        <CartContext.Provider value={{ items, addItems, removeItems, clear, getUnits }}>
            {children}
        </CartContext.Provider>
    )
}