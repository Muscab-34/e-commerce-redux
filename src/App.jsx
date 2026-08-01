
import Header from "./Components/Header"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Data from "./pages/Data"
import Products from "./pages/Dashboard/Products"
import Overview from "./pages/Dashboard/Overview"
import Login from "./pages/Dashboard/Login"

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product  Data={Data}/>} />
        <Route path="/cart" element={<Cart Data={Data} />} />
        <Route path="/cart" element={<Cart Data={Data} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/overview" element={<Overview/>} />
        <Route path="/overview/products" element={<Products />} />
        <Route path="/overview/login" element={<Login />} />

      </Routes>
    </>
  )
}

export default App
