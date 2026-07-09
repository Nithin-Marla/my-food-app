import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaShoppingBag,
  FaHeadset,
  FaTruck,
  FaLeaf,
  FaLock,
} from "react-icons/fa";

import "./Checkout.css";

function Checkout() {

  const navigate = useNavigate();

  const location = useLocation();

  const finalAmount = location.state?.finalAmount || 0;

  const [customer, setCustomer] = useState({

    name: "",

    phone: "",

    email: "",

    address: ""

  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setCustomer({

      ...customer,

      [e.target.name]: e.target.value,

    });

  };

  const continueHandler = () => {

    if (

      customer.name.trim() === "" ||

      customer.phone.trim() === "" ||

      customer.email.trim() === "" ||

      customer.address.trim() === ""

    ) {

      alert("Please fill all the details.");

      return;

    }

    navigate("/payment", {

      state: {

        customer,

        finalAmount,

      },

    });

  };

  return (

    <div className="checkout-page">

      <div className="checkout-header">

        <h1>Checkout</h1>

        <p>

          <FaShieldAlt />

          Your order is safe & secure

        </p>

      </div>

      <div className="checkout-main">

        {/* LEFT SIDE */}

        <div className="checkout-left">

          <div className="checkout-card">

            <div className="card-title">

              <FaMapMarkerAlt />

              <div>

                <h2>Delivery Details</h2>

                <span>

                  Please enter your delivery information

                </span>

              </div>

            </div>
                        {/* Full Name */}

            <div className="input-group">

              <label>

                Full Name

              </label>

              <div className="input-box">

                <FaUser className="input-icon" />

                <input

                  type="text"

                  name="name"

                  placeholder="Enter your full name"

                  value={customer.name}

                  onChange={handleChange}

                />

              </div>

            </div>

            {/* Phone */}

            <div className="input-group">

              <label>

                Phone Number

              </label>

              <div className="input-box">

                <FaPhoneAlt className="input-icon" />

                <input

                  type="tel"

                  name="phone"

                  placeholder="Enter your phone number"

                  value={customer.phone}

                  onChange={handleChange}

                />

              </div>

            </div>

            {/* Email */}

            <div className="input-group">

              <label>

                Email Address

              </label>

              <div className="input-box">

                <FaEnvelope className="input-icon" />

                <input

                  type="email"

                  name="email"

                  placeholder="Enter your email"

                  value={customer.email}

                  onChange={handleChange}

                />

              </div>

            </div>

            {/* Address */}

            <div className="input-group">

              <label>

                Delivery Address

              </label>

              <div className="textarea-box">

                <FaMapMarkerAlt className="input-icon textarea-icon" />

                <textarea

                  rows={4}

                  name="address"

                  placeholder="Enter your complete delivery address"

                  value={customer.address}

                  onChange={handleChange}

                />

              </div>

            </div>

            <button

              className="continue-btn"

              onClick={continueHandler}

            >

              Continue →

            </button>

          </div>

          {/* FEATURES */}

          <div className="features-section">

            <div className="feature-card">

              <FaTruck />

              <div>

                <h4>Fast Delivery</h4>

                <p>10-20 mins</p>

              </div>

            </div>

            <div className="feature-card">

              <FaLeaf />

              <div>

                <h4>Best Quality</h4>

                <p>Fresh & Organic</p>

              </div>

            </div>

            <div className="feature-card">

              <FaLock />

              <div>

                <h4>Secure Payment</h4>

                <p>100% Safe</p>

              </div>

            </div>

          </div>

        </div>
                {/* ===========================
              RIGHT SIDE
        ========================== */}

        <div className="checkout-right">

          <div className="summary-card">

            <div className="summary-header">

              <FaShoppingBag />

              <div>

                <h2>Order Summary</h2>

                <span>Your grocery order</span>

              </div>

            </div>

            <div className="summary-item">

              <span>Subtotal</span>

              <strong>

                ₹{finalAmount.toFixed(2)}

              </strong>

            </div>

            <div className="summary-item">

              <span>Discount</span>

              <strong className="green-text">

                -₹0.00

              </strong>

            </div>

            <div className="summary-item">

              <span>Delivery Charges</span>

              <strong>

                FREE

              </strong>

            </div>

            <div className="summary-item">

              <span>Platform Fee</span>

              <strong>

                ₹5

              </strong>

            </div>

            <hr />

            <div className="summary-total">

              <span>

                Total Amount

              </span>

              <h2>

                ₹{finalAmount.toFixed(2)}

              </h2>

            </div>

            <div className="saving-card">

              🎉 Congratulations!

              <br />

              You are getting

              <strong>

                FREE Delivery

              </strong>

            </div>

          </div>

          {/* HELP CARD */}

          <div className="help-card">

            <FaHeadset className="help-icon" />

            <h3>

              Need Help?

            </h3>

            <p>

              Our support team is available 24×7.

            </p>

            <button>

              Contact Support

            </button>

          </div>

        </div>

      </div>
            {/* END OF MAIN LAYOUT */}

    </div>

  );

}

export default Checkout;