import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../Redux/Reducer";
import { clearAll } from "../Redux/Reducer";
import { totalprice } from "../Redux/Reducer";
function Cart() {
  const cartItem = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeCart(index));
  };
  const handleClearAll = () => {
    dispatch(clearAll());
  };
  const totalPrice = useSelector((state) => state.cart.cartItem.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cartItem.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl text-center text-gray-500">
              Your cart is empty
            </div>
          ) : (
            cartItem.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/* SMALL IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl bg-gray-100"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Price: ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <span>{item.quantity || 1}</span>
                    <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </div>

                {/* TOTAL PRICE */}
                <div className="text-right">
                  <p className="font-bold text-gray-800">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>

                  <button onClick={() => handleRemove(index)} className="text-red-500 text-sm mt-2 hover:underline">
                    Remove
                  </button>
                </div>

              </div>
            
          
          ))
          )}
                                <div>
                <button onClick={() => handleClearAll()} className="text-red-500 text-sm mt-2 hover:underline bg-gray-200 px-4 py-2 rounded-lg float-right">
                    Clear All
                  </button>
                </div>

        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit sticky top-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{cartItem.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* SHIPPING INFO */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Shipping Info</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 mb-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button  className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>

      </div>


    </div>
  );
}

export default Cart;