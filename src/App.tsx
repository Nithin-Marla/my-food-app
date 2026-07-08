import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import VegItems from "./VegItems";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";


function App() {

  let {cart} = useContext(CartContext);
  

  return (
    <BrowserRouter>
      <div className="app-container">
        

        <nav className="navbar">

    <div className="nav-left">

        <NavLink className="nav-link" to="/">
            🏠 Home
        </NavLink>

        <NavLink className="nav-link" to="/veg-items">
            🥬 Veg Items
        </NavLink>

        <NavLink className="nav-link" to="/non-veg-items">
            🍗 Non Veg
        </NavLink>

        <NavLink className="nav-link" to="/milk-items">
            🥛 Milk Items
        </NavLink>

    </div>

    <div className="nav-right">

        <NavLink className="nav-link" to="/register">
            Register
        </NavLink>

        <NavLink className="nav-link cart-link" to="/cart">

            🛒 Cart

            <span className="cart-count">

                {cart.length}

            </span>

        </NavLink>

    </div>

</nav>

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg-items" element={<VegItems />} />
            <Route path="/non-veg-items" element={<NonVeg />} />
            <Route path="/milk-items" element={<Milk />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Cart/>} />


          </Routes>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={2500}
            toastStyle={{
                borderRadius: "16px",
                fontSize: "15px"
            }}
        />

        <ScrollToTop

smooth

color="#16a34a"
/>

      </div>
       <div>
      {/* other content */}
      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;