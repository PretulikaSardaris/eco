
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage'
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import { ShopContextProvider } from './context/ShopContext';
import Login from './pages/Login';
import Notification from './components/Notification';
import NewHomePage from './pages/NewHomepage';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';


  

function App() {
  

  return (
    <>
    <ShopContextProvider >
    <Router>
    <Navbar />
    
      <Routes >
      <Route path='/' element = {<NewHomePage />} />
      <Route path='/ProductPage' element = {<ProductPage />} />
      <Route path='/CartPage' element = {<CartPage />} />
      <Route path='/Login' element = {<Login />} />
      <Route path='/category/:category' element = {<CategoryPage />} />


      </Routes>
      </Router>
      <Notification />
      <Footer />
      </ShopContextProvider>
    </>
  )
}
    
export default App
