import React, {createContext, useState} from 'react';

export const CartContext =createContext();

export const CartProvider =({children})=>{
    const [cartItems, setCartItems]=useState([]);
    const [cartItemCount, setCartItemCount]=useState(0);
    const updateCart=(count)=>{
        setCartItemCount(count);
    };
    // const addToCart=(product)=>{
    //     setCartItems((prevCartItems)=>[...prevCartItems,product]);
    // };

    return(
        <CartContext.Provider value={{cartItemCount, updateCart}}>
            {children}
        </CartContext.Provider>
    );
};