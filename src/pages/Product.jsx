import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer";



function Product({ Data }) {
  const dispatch = useDispatch()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 p-6">
      {Data.map((item) => {

        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-64 flex items-center justify-center bg-gray-100 p-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                {item.name}
              </h2>

              <p className="text-2xl font-bold text-green-600 mt-3">
                ${item.price.toFixed(2)}
              </p>

              <button onClick={() => dispatch(addToCart(item))} className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;