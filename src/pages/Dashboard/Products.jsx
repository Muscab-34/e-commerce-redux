import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function Products() {
  const [user, setUser] = useState({ name: "", image: null });
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUser({ ...user, [name]: files ? files[0] : value });
  };

  const handleApi = async () => {
    try {
      const res = await fetch("/images/");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    if (user.image) formData.append("image", user.image);

    try {
      const url = editId ? `/images/${editId}` : "/images";
      const method = editId ? "PUT" : "POST";
      const res = await fetch(url, { method, body: formData });
      const product = await res.json();

      if (editId) {
        setUsers(users.map((item) => (item._id === product._id ? product : item)));
      } else {
        setUsers([product, ...users]);
      }

      setUser({ name: "", image: null });
      setEditId(null);
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (product) => {
    setUser({ name: product.name, image: null });
    setEditId(product._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/images/${id}`, { method: "DELETE" });
      setUsers(users.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">Products</h1>
            <p className="text-slate-500 mt-2">Manage all your products</p>
          </div>

          <button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
            + Add Product
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md mb-8 space-y-4">
            <input name="name" value={user.name} onChange={handleChange} placeholder="Product name" className="w-full border border-slate-300 p-3 rounded-xl" required />
            <input name="image" type="file" accept="image/*" onChange={handleChange} className="w-full border border-slate-300 p-3 rounded-xl" required={!editId} />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
              {editId ? "Update Product" : "Save Product"}
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((product) => (
            <div key={product._id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={`/uploads/${product.image}`} alt={product.name} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-bold text-slate-800">{product.name}</h2>
                <div className="flex gap-3 mt-5">
                  <button onClick={() => handleEdit(product)} className="bg-amber-500 text-white px-4 py-2 rounded-xl">Edit</button>
                  <button onClick={() => handleDelete(product._id)} className="bg-red-600 text-white px-4 py-2 rounded-xl">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
