import React, { useState } from "react";
//import { useState } from "react/cjs/react.production.min";

function Item({ name, category }) {
  const [isInCart, setIsIncart] = useState(false);

  function handleAddToCartClick() {
    setIsIncart((isInCart) => !isInCart);
  }
  return (
    <li className={isInCart? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart? "remove-from-cart": "add-to-cart"} 
        onClick={handleAddToCartClick}>
        {isInCart? "Remove From": "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;

