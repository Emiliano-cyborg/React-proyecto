import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, productDetail } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <p className="product-detail">{productDetail}</p>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Añadir al carrito {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};