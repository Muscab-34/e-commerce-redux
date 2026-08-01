import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">Shop Admin</h1>
        <p className="text-slate-400 text-sm mt-1">
          E-Commerce Dashboard
        </p>
      </div>

      <nav className="flex-1 p-5">

        <p className="text-xs uppercase text-slate-400 mb-4">
          Main Menu
        </p>

        <ul className="space-y-3">

          <li>
            <Link
              to="/overview"
              className="block px-4 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              📊 Overview
            </Link>
          </li>

          <li>
            <Link
              to="/overview/products"
              className="block px-4 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              📦 Products
            </Link>
          </li>

          <li>
            <Link
              to="/overview/orders"
              className="block px-4 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              🛒 Orders
            </Link>
          </li>

          <li>
            <Link
              to="/overview/customers"
              className="block px-4 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              👥 Customers
            </Link>
          </li>

        </ul>

      </nav>

      <div className="p-5 border-t border-slate-700">
        <Link
          to="/overview/login"
          className="block text-center bg-red-600 hover:bg-red-700 rounded-xl py-3 font-semibold transition"
        >
          Logout
        </Link>
      </div>

    </aside>
  );
}

export default Sidebar;