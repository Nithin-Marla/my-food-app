import { useContext, useState } from "react";
import { CartContext } from "../contextApi/CartContext";
import "../Cart.css";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  // Coupon State
  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] = useState(0);

  const [couponMessage, setCouponMessage] = useState("");

  const [appliedCoupon, setAppliedCoupon] = useState("");

  // Cart Total

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Delivery

  const deliveryCharge = cart.length > 0 ? 40 : 0;

  const platformFee = 5;

  const finalAmount =
    total - discount + deliveryCharge + platformFee;

  // Coupon Logic

  const applyCoupon = () => {

    let dis = 0;

    let couponName = "";

    switch (coupon.trim().toUpperCase()) {

      case "SAVE10":
        dis = total * 0.10;
        couponName = "SAVE10";
        break;

      case "SAVE20":
        dis = total * 0.20;
        couponName = "SAVE20";
        break;

      case "SAVE30":
        dis = total * 0.30;
        couponName = "SAVE30";
        break;

      case "NEW50":
        dis = total * 0.50;
        couponName = "NEW50";
        break;

      default:

        setDiscount(0);

        setAppliedCoupon("");

        setCouponMessage("Invalid Coupon Code");

        return;
    }

    setDiscount(dis);

    setAppliedCoupon(couponName);

    setCouponMessage(
      `Coupon ${couponName} Applied Successfully`
    );
  };

  return (

    <div className="cart-page">

      <div className="cart-container">

        <div className="cart-header">

          <div>

            <h1>🛒 Shopping Cart</h1>

            <p>

              {cart.length} Item(s) in your cart

            </p>

          </div>

          {

            cart.length > 0 && (

              <button

                className="clear-cart-btn"

                onClick={clearCart}

              >

                Clear Cart

              </button>

            )

          }

        </div>

        {

          cart.length === 0 ?

            (

              <div className="empty-cart">

                <img

                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"

                  alt="Empty"

                />

                <h2>

                  Your Cart is Empty

                </h2>

                <p>

                  Add some products to start shopping.

                </p>

              </div>

            )

            :

            (

              <div className="cart-layout">

                <div className="cart-items">

                  {

                    cart.map((item) => (

                      <div

                        className="cart-card"

                        key={item.id}

                      >

                        <div className="cart-image">

                          <img

                            src={item.imageUrl}

                            alt={item.name}

                          />

                        </div>

                        <div className="cart-details">

                          <h2>

                            {item.name}

                          </h2>

                          <div className="cart-rating">

                            ⭐⭐⭐⭐⭐

                          </div>

                          <p className="delivery-time">

                            🚚 Delivery in 15 mins

                          </p>

                          <p className="price">

                            ₹{item.price}

                          </p>

                          <div className="quantity-box">

                            <button

                              onClick={() =>
                                decreaseQuantity(item.id)
                              }

                            >

                              -

                            </button>

                            <span>

                              {item.quantity}

                            </span>

                            <button

                              onClick={() =>
                                increaseQuantity(item.id)
                              }

                            >

                              +

                            </button>

                          </div>

                        </div>

                        <div className="cart-right">

                          <div className="item-total">

                            <p>Total</p>

                            <h3>

                              ₹{item.price * item.quantity}

                            </h3>

                          </div>

                          <button

                            className="remove-btn"

                            onClick={() =>
                              removeFromCart(item.id)
                            }

                          >

                            Remove

                          </button>

                        </div>

                      </div>

                    ))

                  }

                </div>
                                {/* RIGHT SIDE */}

                <div className="bill-details">

                  <h2>Bill Details</h2>

                  <div className="coupon-box">

                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      value={coupon}
                      onChange={(e) =>
                        setCoupon(e.target.value)
                      }
                    />

                    <button
                      type="button"
                      onClick={applyCoupon}
                    >
                      Apply
                    </button>

                  </div>

                  {/* Coupon Message */}

                  {couponMessage && (

                    appliedCoupon ? (

                      <div className="coupon-success">

                        <p className="coupon-success-text">

                          🎉 Coupon <b>{appliedCoupon}</b> Applied Successfully!

                        </p>

                      </div>

                    ) : (

                      <div className="coupon-error">

                        <p className="coupon-error-text">

                          ❌ {couponMessage}

                        </p>

                      </div>

                    )

                  )}

                  <div className="coupon-list">

                    <h4>Available Coupons</h4>

                    <p>🏷️ SAVE10 → Flat 10% OFF</p>

                    <p>🏷️ SAVE20 → Flat 20% OFF</p>

                    <p>🏷️ SAVE30 → Flat 30% OFF</p>

                    <p>🏷️ NEW50 → Flat 50% OFF</p>

                  </div>

                  <hr />

                  <div className="bill-row">

                    <span>Subtotal</span>

                    <span>

                      ₹{total.toFixed(2)}

                    </span>

                  </div>

                  <div className="bill-row">

                    <span>Discount</span>

                    <span className="green">

                      -₹{discount.toFixed(2)}

                    </span>

                  </div>

                  <div className="bill-row">

                    <span>Delivery Charges</span>

                    <span>

                      ₹{deliveryCharge}

                    </span>

                  </div>

                  <div className="bill-row">

                    <span>Platform Fee</span>

                    <span>

                      ₹{platformFee}

                    </span>

                  </div>

                  <hr />

                  <div className="bill-total">

                    <span>Total Amount</span>

                    <span>

                      ₹{finalAmount.toFixed(2)}

                    </span>

                  </div>

                  {discount > 0 && (

                    <div className="saving-box">

                      🎉 Congratulations!

                      <br />

                      You saved

                      <b>

                        {" "}₹{discount.toFixed(2)}

                      </b>

                      {" "}on this order.

                    </div>

                  )}

                  <button className="checkout-btn">

                    Proceed To Checkout

                  </button>

                </div>

              </div>

            )

        }

      </div>

    </div>
      );
}

export default Cart;