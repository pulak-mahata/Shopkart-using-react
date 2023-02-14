import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNav from "./Components/HomeNav";
import Products from "./Components/Products";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";




function App() {
  return (

    <div>
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/products" element = {<ProductList />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/sign-in" element = {<Login />} />
      <Route path = "/cart" element = {<Cart />} /> 
      <Route path = "/home-nav" element = {<HomeNav />} /> 
      <Route path = "/product" element = {<Product />} /> 
  
      
    </Routes>
   </BrowserRouter>
 
    </div>
  );
}

export default App;

