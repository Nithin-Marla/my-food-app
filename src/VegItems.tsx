
import "./VegItems.css";
import { PiCarrotBold } from "react-icons/pi";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";


function VegItems() {

  let {addToCart} = useContext(CartContext);

  const vegItems: Product[] = [
    {
      id: 1,
      name: "Brinjal",
      imageUrl: "images/veg/brinjal.png",
      price: 30,
      description: "Fresh and healthy brinjals directly from farms."
    },
    {
      id: 2,
      name: "Cabbage",
      imageUrl: "images/veg/cabbage.png",
      price: 35,
      description: "Crispy and fresh cabbage rich in nutrients."
    },
    {
      id: 3,
      name: "Capsicum",
      imageUrl: "images/veg/capsicum.png",
      price: 50,
      description: "Premium quality capsicum with rich flavor."
    },
    {
      id: 4,
      name: "Carrot",
      imageUrl: "images/veg/carrot.webp",
      price: 40,
      description: "Sweet and juicy carrots full of vitamins."
    },
    {
      id: 5,
      name: "Cauliflower",
      imageUrl: "images/veg/cauliflower.webp",
      price: 45,
      description: "Farm fresh cauliflower for healthy meals."
    },
    {
      id: 6,
      name: "Cucumber",
      imageUrl: "images/veg/cucumber.png",
      price: 30,
      description: "Fresh cucumbers perfect for salads and snacks."
    },
    {
      id: 7,
      name: "Onion",
      imageUrl: "images/veg/onion.webp",
      price: 32,
      description: "Premium onions with rich taste and freshness."
    },
    {
      id: 8,
      name: "Potato",
      imageUrl: "images/veg/potato.png",
      price: 28,
      description: "Fresh potatoes suitable for all dishes."
    },
    {
      id: 9,
      name: "Spinach",
      imageUrl: "images/veg/spinach.png",
      price: 25,
      description: "Nutritious spinach packed with iron and minerals."
    },
    {
      id: 10,
      name: "Tomato",
      imageUrl: "images/veg/tomato.png",
      price: 38,
      description: "Fresh red tomatoes with natural sweetness."
    }
  ];

  return (
    <div className="veg-page">
      <h1 className="veg-heading"><PiCarrotBold className="veg-heading-icon"/> Fresh Vegetables</h1>

      <ul className="veg-container">
        {vegItems.map((veg) => (
          <li key={veg.id} className="veg-card">
<div className="offer-badge">
    20% OFF
</div>

<div className="delivery-tag">
    ⏱ 10 min
</div>

            <img
              src={veg.imageUrl}
              alt={veg.name}
              className="veg-image"
            />

            <h3 className="veg-name">
              <div className="veg-rating">

★★★★★

</div>
              {veg.name}
            </h3>

            <div className="veg-description">
              <span className="veg-weight">
                500 g
              </span>
              <p>
                {veg.description}
              </p>
            </div>

            <div className="veg-footer">
              <span className="veg-price">
                ₹{veg.price}/kg
              </span>

              <button className="buy-btn" onClick={() => {
                addToCart(veg);
                toast.success(`${veg.name} added to cart successfully!`)}
            }>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VegItems;