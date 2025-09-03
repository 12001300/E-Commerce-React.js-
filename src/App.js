
import './App.css';
import Login from './components/Login';
import Navbarr from './components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { BrowserRouter,Link,Route,Router, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import { SearchProvider } from './context/SearchContext';
function App() {
  return (
    <div className="App">
      <SearchProvider>

<BrowserRouter>
  <Navbarr/>
<Routes>

  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
  
</Routes>

</BrowserRouter>
 </SearchProvider>
    
     
     
    </div>
  );
}

export default App;
