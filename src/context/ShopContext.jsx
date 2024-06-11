
import { signInWithEmailAndPassword , onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { auth, db } from '../Library/firebase';
import { getDoc, setDoc, doc } from 'firebase/firestore';


export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
    const [products , setProducts] = useState([])
    const[cart, setCart ] = useState([]);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');

      

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');

      const data = await res.json()

      if (data && data.products) {
        setProducts(data.products)

      }};
    fetchProducts();
    }, [])


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
        if(currentUser){
        const userDoc = await getDoc(doc(db, 'username' , currentUser.uid));
        setUsername(userDoc.data().username)
        setUser(currentUser);
        const cartDoc = await getDoc(doc,(db,'usercart' , currentUser.uid));
        if(cartDoc.exists()){
          setCart(cartDoc.data().cart)
        }
      } else{
        setUser(null);
        setUsername('');
        setCart({})
      }
      });
      return () => unsubscribe();
    }, []);



    const login = async (username , email, password) => {
      try {
        
        await signInWithEmailAndPassword(auth, email, password);
        setUser({email});
        setUsername(username);
        console.log(username)
      } catch (err) {
        console.error(err);
      }
    };
   

    const register = async(username,  email , password) => {
      const res = await createUserWithEmailAndPassword(auth, email , password);
      await setDoc(doc(db , 'username' , res.user.uid) , {username , email, id:res.user.uid});
      await setDoc(doc(db , 'usercart' , res.user.uid) , {cart:[]});
      setUsername(username)
    }
  

    const updateCartInFirestore = async (newCart) => {
      if (user) {
        await setDoc(doc(db, 'usercart', user.uid), { cart: newCart });
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
          updateCartInFirestore(newCart)
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
        updateCartInFirestore(newCart)
        return newCart;
      });
    }

    const clearCart = () => {
     setCart({});
     if(user){
      updateCartInFirestore({})
     } 
     }

    const getTotalItems = useMemo(() => {
      return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

  return (
    <ShopContext.Provider value={{products ,  cart , getTotalItems ,login ,register ,  addToCart , removeFromCart , clearCart , user , username}}>
     {children}
    </ShopContext.Provider>
  )
}
