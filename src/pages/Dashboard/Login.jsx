function Login() {

  return (

    <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center px-5">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">


        {/* LEFT SIDE */}

        <div
          className="hidden md:flex bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80')"
          }}
        >

          <div className="w-full bg-black/50 flex items-center p-12">

            <div className="text-white">

              <div className="text-6xl mb-5">
                🛍️
              </div>

              <h1 className="text-5xl font-bold">
                Welcome Back
              </h1>

              <p className="mt-5 text-lg text-gray-200 leading-8">
                Login to your account and enjoy
                thousands of quality products
                with fast delivery.
              </p>


              <div className="mt-8 space-y-3 text-lg">

                <p>
                  🚚 Fast Delivery
                </p>

                <p>
                  🔒 Secure Payment
                </p>

                <p>
                  ⭐ Best Products
                </p>

              </div>

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}


        <div className="p-10 md:p-14">


          <div className="text-center mb-10">


            <div
              className="
              w-16 h-16 mx-auto
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-3xl
              text-white
              "
            >
              🛒
            </div>


            <h2
              className="
              text-4xl
              font-bold
              text-gray-800
              mt-5
              "
            >
              Login
            </h2>


            <p className="text-gray-500 mt-2">
              Welcome back to our store
            </p>


          </div>





          <form className="space-y-6">


            {/* Email */}

            <div>

              <label
                className="
                block
                mb-2
                font-semibold
                text-gray-700
                "
              >
                Email Address
              </label>


              <input

                type="email"

                placeholder="Enter your email"

                className="
                w-full
                px-5
                py-4
                rounded-xl
                bg-gray-50
                border
                border-gray-300
                outline-none
                text-gray-800
                focus:border-blue-600
                focus:ring-2
                focus:ring-blue-200
                transition
                "

              />

            </div>





            {/* Password */}

            <div>

              <label
                className="
                block
                mb-2
                font-semibold
                text-gray-700
                "
              >
                Password
              </label>


              <input

                type="password"

                placeholder="Enter your password"

                className="
                w-full
                px-5
                py-4
                rounded-xl
                bg-gray-50
                border
                border-gray-300
                outline-none
                text-gray-800
                focus:border-blue-600
                focus:ring-2
                focus:ring-blue-200
                transition
                "

              />


            </div>





            {/* Remember */}


            <div
              className="
              flex
              justify-between
              items-center
              text-sm
              "
            >


              <label
                className="
                flex
                items-center
                gap-2
                text-gray-600
                "
              >

                <input type="checkbox"/>

                Remember me

              </label>



              <a
                href="#"
                className="
                text-blue-600
                font-semibold
                "
              >

                Forgot Password?

              </a>


            </div>





            {/* Button */}


            <button

              type="submit"

              className="
              w-full
              py-4
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-bold
              transition
              duration-300
              "

            >

              Login

            </button>



          </form>





          <p
            className="
            text-center
            mt-8
            text-gray-600
            "
          >

            Don't have an account?

            <a
              href="/register"
              className="
              ml-2
              font-bold
              text-blue-600
              "
            >
              Register
            </a>


          </p>



        </div>


      </div>


    </div>

  );

}

export default Login;