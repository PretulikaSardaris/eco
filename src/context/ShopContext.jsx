import React, { createContext, useEffect, useState } from 'react'



export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
    const [products , setProducts] = useState([])
    const[cart, setCart ] = useState([]);

    useEffect(() => {
      const fetchProducts = async() => {
        const res = await fetch('https://dummyjson.com/products');
       
        const data = await res.json()
        
        if(data && data.products){
          setProducts(data.products)
        }
       
      };
      fetchProducts();

    }, [])

    
      const addToCart = (item) => {
        setCart((prev) => 
        {
          const newCart = {...prev};
          if(newCart[item.id]){
            newCart[item.id].quantity += 1;
          } else {
            newCart[item.id] = {...item , quantity: 1}
          }
          return newCart
        }
        )
      };

    

    const removeFromCart = (itemId) => {
      setCart((prev) => {
        const newCart = { ...prev };
        if (newCart[itemId].quantity > 1) {
          newCart[itemId].quantity -= 1;
        } else {
          delete newCart[itemId];
        }
        return newCart;
      });
    }

    const clearCart = () => {
     setCart([])
    }

  return (
    <ShopContext.Provider value={{products , cart , addToCart , removeFromCart , clearCart}}>
     {children}
    </ShopContext.Provider>
  )
}

// export default {ShopContext, ShopContextProvider}


