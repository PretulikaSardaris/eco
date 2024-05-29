import React, { createContext, useState } from 'react'



export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {

    const[cart, setCart ] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart , item])
        console.log(item)

    }

    const removeFromCart = (itemId) => {
      setCart((prevCart) => prevCart.filter(item => item.id !== itemId))
    }

    const clearCart = () => {
     setCart([])
    }

  return (
    <ShopContext.Provider value={{cart , addToCart , removeFromCart , clearCart}}>
     {children}
    </ShopContext.Provider>
  )
}

// export default {ShopContext, ShopContextProvider}


