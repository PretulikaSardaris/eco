
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

function App() {
  

  return (
    <>
    <ShopContextProvider >
    <Router>
      <Navbar />
      <Routes >
      <Route path='/' element = {<ProductPage />} />
      <Route path='/cart' element = {<CartPage />} />
      </Routes>
      </Router>
      </ShopContextProvider>
    </>
  )
}
    
export default App
