import React, {createContext, useState} from 'react';

export const CartContext =createContext();

export const CartProvider =({children})=>{
    //const [cartItems, setCartItems]=useState([]);
    const [cartItemCount, setCartItemCount]=useState(0);

     const updateCartItemCount=(count)=>{
         setCartItemCount(count);
     };
    // const addToCart=(product)=>{
    //     setCartItems((prevCartItems)=>[...prevCartItems,product]);
    // };

    return(
        <CartContext.Provider value={{cartItemCount, updateCartItemCount}}>
            {children}
        </CartContext.Provider>
    );
};