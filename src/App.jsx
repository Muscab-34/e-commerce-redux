
import Header from "./Components/Header"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Data from "./pages/Data"
function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product  Data={Data}/>} />
        <Route path="/cart" element={<Cart Data={Data} />} />
      </Routes>
    </>
  )
}

export default App