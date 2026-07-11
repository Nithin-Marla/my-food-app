import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import VegItems from "./VegItems";
import NonVeg from "./NonVeg";
import Milk from "./Milk";

import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import Footer from "./components/Footer";

import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "react-scroll-to-top";
import Payment from "./components/Payment";

function App() {

  const { cart } = useContext(CartContext);

  return (

    <BrowserRouter>

      <div className="app-container">

        {/* Navbar */}

        <nav className="navbar">

          <div className="nav-left">

            <div className="brand-logo">

    <div className="logo-icon">

        ⚡

    </div>

    <div className="brand-heading">

        <h1>

            Quick<span>Cart</span>

        </h1>

        <p>

            Groceries Delivered in Minutes

        </p>

    </div>

</div>

            <NavLink className="nav-link" to="/">
              🏠 Home
            </NavLink>

            <NavLink className="nav-link" to="/veg-items">
              🥬 Veg
            </NavLink>

            <NavLink className="nav-link" to="/non-veg-items">
              🍗 Non Veg
            </NavLink>

            <NavLink className="nav-link" to="/milk-items">
              🥛 Milk
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

        {/* Routes */}

        <div className="content-container">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/veg-items" element={<VegItems />} />

            <Route path="/non-veg-items" element={<NonVeg />} />

            <Route path="/milk-items" element={<Milk />} />

            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />

            <Route path="/payment" element={<Payment />} />

          </Routes>

        </div>

        <ToastContainer
          position="top-right"
          autoClose={2500}
          toastStyle={{
            borderRadius: "16px",
            fontSize: "15px",
          }}
        />

        <ScrollToTop
          smooth
          color="#16a34a"
        />

      </div>

      <Footer />

    </BrowserRouter>

  );

}

export default App;