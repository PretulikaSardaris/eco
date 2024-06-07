
import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , auth } from 'firebase/auth';

export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
    const [products , setProducts] = useState([])
    const[cart, setCart ] = useState([]);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');

      

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

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);



    const login = async (username , email, password) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setUser({email});
        setUsername(username);
      } catch (err) {
        console.error(err);
      }
    };
  
    const logOut = async () => {
      try {
        await signOut(auth);
        setUser(null);
        setUsername('')
      } catch (err) {
        console.error(err);
      }
    };
   
  
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

    

    const removeFromCart = (item) => {
      setCart((prev) => {
        const newCart = { ...prev };
        if (newCart[item.id].quantity > 1) {
          newCart[item.id].quantity -= 1;
        } else {
          newCart[item.id] = {...item , quantity: 0}
        }
        return newCart;
      });
    }

    const clearCart = () => {
     setCart([])
    }

  return (
    <ShopContext.Provider value={{products ,  cart , login , addToCart , removeFromCart , clearCart , user , username}}>
     {children}
    </ShopContext.Provider>
  )
}
