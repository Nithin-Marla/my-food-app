import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {

    const navigate = useNavigate();

    const location = useLocation();

    const {

        customer,

        paymentMode,

        finalAmount

    } = location.state || {};

    const orderId = `QC${Math.floor(
        100000 + Math.random() * 900000
    )}`;

    const today = new Date();

    return (

        <div className="success-page">

            <div className="success-card">

                <div className="success-circle">

                    ✓

                </div>

                <h1>

                    Order Placed Successfully

                </h1>

                <p>

                    Thank you for shopping with

                    <strong>

                        {" "}QuickCart ❤️

                    </strong>

                </p>

                <div className="success-details">

                    <div className="success-row">

                        <span>

                            Order ID

                        </span>

                        <strong>

                            {orderId}

                        </strong>

                    </div>

                    <div className="success-row">

                        <span>

                            Customer

                        </span>

                        <strong>

                            {customer?.name}

                        </strong>

                    </div>

                    <div className="success-row">

                        <span>

                            Phone

                        </span>

                        <strong>

                            {customer?.phone}

                        </strong>

                    </div>

                    <div className="success-row">

                        <span>

                            Email

                        </span>

                        <strong>

                            {customer?.email}

                        </strong>

                    </div>

                    <div className="success-row">

                        <span>

                            Payment

                        </span>

                        <strong>

                            {paymentMode}

                        </strong>

                    </div>

                    <div className="success-row">

                        <span>

                            Amount Paid

                        </span>

                        <strong>

                            ₹{finalAmount?.toFixed(2)}

                        </strong>

                    </div>

                    <div className="success-row">

                        <span>

                            Delivery Time

                        </span>

                        <strong>

                            20 - 30 Minutes

                        </strong>

                    </div>

                    <div className="success-row">

                        <span>

                            Ordered On

                        </span>

                        <strong>

                            {today.toLocaleString()}

                        </strong>

                    </div>

                </div>

                <div className="address-box">

                    <h3>

                        Delivery Address

                    </h3>

                    <p>

                        {customer?.address}

                    </p>

                </div>
                                <div className="delivery-progress">

                    <h3>

                        🚚 Delivery Status

                    </h3>

                    <div className="progress-bar">

                        <div className="progress-fill"></div>

                    </div>

                    <div className="progress-steps">

                        <span className="active">

                            ✔ Order Confirmed

                        </span>

                        <span>

                            👨‍🍳 Preparing

                        </span>

                        <span>

                            🛵 Out For Delivery

                        </span>

                    </div>

                </div>

                <button

                    className="continue-shopping-btn"

                    onClick={() => navigate("/")}

                >

                    🛒 Continue Shopping

                </button>

            </div>

        </div>

    );

}

export default OrderSuccess;