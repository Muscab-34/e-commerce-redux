import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItem = useSelector((state) => state.cart.cartItem)
  return (
<header className="bg-blue-500 text-white p-4 flex justify-around items-center h-20 sticky top-0 z-50 shadow-md">      <h1 className="text-2xl font-bold">My React App</h1>
      <ul className=" flex gap-[30px]  ">

        <li>       <Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Product</Link></li>
        <div className="flex">
             <div className="cart-icon relative"></div>
          <li><Link to="/cart">Cart</Link>
            <div className="w-[25px] h-[25px]  rounded-full bg-red-700 mt-[-40px] ml-[30px] text-center ">
              {cartItem.length}
            </div>
          </li>
          
        </div>
      </ul>
    </header>
  );
}
export default Header;  