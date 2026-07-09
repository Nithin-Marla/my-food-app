import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaShieldAlt
} from "react-icons/fa";

import "./Payment.css";

function Payment() {

  const navigate = useNavigate();

  const location = useLocation();

  const {

    customer,

    finalAmount

  } = location.state || {};

  const [paymentMode, setPaymentMode] = useState("Cash");

  return (

    <div className="payment-page">

      <div className="payment-header">

        <h1>

          Payment

        </h1>

        <p>

          <FaShieldAlt />

          Secure Payment Gateway

        </p>

      </div>

      <div className="payment-container">

        {/* LEFT */}

        <div className="payment-left">

          <div className="payment-card">

            <h2>

              Choose Payment Method

            </h2>

            <label

              className={
                paymentMode === "Cash"

                  ? "payment-option active"

                  : "payment-option"
              }

            >

              <input

                type="radio"

                checked={paymentMode === "Cash"}

                onChange={() =>

                  setPaymentMode("Cash")

                }

              />

              <FaMoneyBillWave className="payment-icon" />

              <div>

                <h3>

                  Cash On Delivery

                </h3>

                <p>

                  Pay when your order arrives.

                </p>

              </div>

            </label>

            <label

              className={
                paymentMode === "UPI"

                  ? "payment-option active"

                  : "payment-option"
              }

            >

              <input

                type="radio"

                checked={paymentMode === "UPI"}

                onChange={() =>

                  setPaymentMode("UPI")

                }

              />

              <FaMobileAlt className="payment-icon" />

              <div>

                <h3>

                  UPI Payment

                </h3>

                <p>

                  Google Pay • PhonePe • Paytm

                </p>

              </div>

            </label>
                        {/* ===========================
                    UPI SECTION
            ========================== */}

            {paymentMode === "UPI" && (

              <div className="upi-card">

                <h3>

                  Scan QR to Pay

                </h3>

                <div className="qr-box">

                  <QRCode
                    size={220}
                    value={`upi://pay?pa=9440274562@axl&pn=QuickCart&am=${finalAmount.toFixed(
                      2
                    )}&cu=INR`}
                  />

                </div>

                <div className="upi-details">

                  <p>

                    <strong>UPI ID</strong>

                  </p>

                  <span>

                    9440274562@axl

                  </span>

                </div>

                <button

                  className="pay-btn"

                  onClick={() =>

                    navigate("/order-success", {

                      state: {

                        customer,

                        paymentMode,

                        finalAmount,

                      },

                    })

                  }

                >

                  Payment Successful

                </button>

              </div>

            )}

            {/* ===========================
                    CASH ON DELIVERY
            ========================== */}

            {paymentMode === "Cash" && (

              <div className="cod-card">

                <h3>

                  Cash On Delivery

                </h3>

                <p>

                  Please keep

                  <strong>

                    {" "}₹{finalAmount.toFixed(2)}{" "}

                  </strong>

                  ready while receiving your order.

                </p>

                <button

                  className="pay-btn"

                  onClick={() =>

                    navigate("/order-success", {

                      state: {

                        customer,

                        paymentMode,

                        finalAmount,

                      },

                    })

                  }

                >

                  Confirm Order

                </button>

              </div>

            )}

          </div>

        </div>

        {/* ===========================
                RIGHT SIDE
        ========================== */}

        <div className="payment-right">

          <div className="payment-summary">

            <h2>

              Order Summary

            </h2>

            <div className="summary-row">

              <span>

                Customer

              </span>

              <strong>

                {customer?.name}

              </strong>

            </div>

            <div className="summary-row">

              <span>

                Phone

              </span>

              <strong>

                {customer?.phone}

              </strong>

            </div>

            <div className="summary-row">

              <span>

                Payment

              </span>

              <strong>

                {paymentMode}

              </strong>

            </div>

            <div className="summary-row">

              <span>

                Delivery

              </span>

              <strong>

                20-30 mins

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

            <div className="secure-box">

              🔒 100% Secure Payment

            </div>

          </div>

        </div>
              </div>

    </div>

  );

}

export default Payment;