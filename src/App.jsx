
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import { ShopContextProvider } from './context/ShopContext';
import Login from './components/Login';
import Notification from './components/Notification';


function App() {
  

  return (
    <>
    <ShopContextProvider >
    <Router>
      <Navbar />
      <Routes >
      <Route path='/' element = {<ProductPage />} />
      <Route path='/cart' element = {<CartPage />} />
      <Route path='/Login' element = {<Login />} />

      </Routes>
      </Router>
      <Notification />
      </ShopContextProvider>
    </>
  )
}
    
export default App
