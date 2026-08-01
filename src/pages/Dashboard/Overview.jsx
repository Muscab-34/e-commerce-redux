import Sidebar from "./Sidebar";

function Overview() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard Overview
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome back, Admin 👋
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-slate-500 font-medium">Total Products</h3>
            <h1 className="text-4xl font-bold mt-4">0</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-slate-500 font-medium">Total Orders</h3>
            <h1 className="text-4xl font-bold mt-4">0</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-slate-500 font-medium">Customers</h3>
            <h1 className="text-4xl font-bold mt-4">0</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-slate-500 font-medium">Revenue</h3>
            <h1 className="text-4xl font-bold mt-4">$0</h1>
          </div>

        </div>

        {/* Inta kale ee code-kaaga halkaan sii wad */}

      </div>

    </div>
  );
}

export default Overview;