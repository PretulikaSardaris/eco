import {createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useContext ,  useState } from 'react';
import { toast } from 'react-toastify';
import {auth, db} from  '../Library/firebase'
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../context/ShopContext";




const Login = () => {
  const { login } = useContext(ShopContext);
   const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [register, setRegister] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
       
        const formData = new FormData(e.target)
        const {username , email , password } = Object.fromEntries(formData)
       
        try{
            await login(username , email , password )
           
            toast.success('Welcome Back ' + username)
            
            navigate('/CartPage')
        }catch(err){
            console.log(err)
            toast.error(err.message)
        } finally{
          setLoading(false)
        }
      };


    const handleRegister = async (e) => {
        e.preventDefault();
        setRegister(true)
       
        const formData = new FormData(e.target)
        const {username , email , password } = Object.fromEntries(formData)
        try{
            const res = await createUserWithEmailAndPassword(auth , email , password)
            await setDoc(doc(db , 'username' , res.user.uid) , {
             username,
             email,
             id:res.user.uid,
            })
            await setDoc(doc(db , 'usercart' , res.user.uid) , {
                cart: []
               })

toast.success('Account created login now')
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }
        finally{
        setRegister(false)

        }
      };

  return (
    <div className="login w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-image_133225.jpg')"}}>
      <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-25 p-10 rounded-lg shadow-lg w-full max-w-4xl">

        {/* Login */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back</h2>

          <form className="flex flex-col items-center w-full gap-4" onSubmit={handleLogin}>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="username"
              name="username"
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="password"
              required
            />
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-25"
              type="submit"  
              disabled={loading}
            >
              {loading ? 'loading ..' : 'Sign In'}
            </button>
          </form>
        </div>
        <div className="h-0.5 w-full bg-slate-500 my-6 md:hidden"></div>
        <div className="h-full w-0.5 bg-slate-500 hidden md:block mx-10"></div>
        {/* Register */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
          <form className="flex flex-col items-center w-full gap-4" onSubmit={handleRegister}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="username"
              name="username"
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="email"
              name="email"
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="password"
              required
            />
            <button
              className="bg-purple-600 hover:bg-purple-500 w-25 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={register}
            >
               {register ? 'loading ..' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
