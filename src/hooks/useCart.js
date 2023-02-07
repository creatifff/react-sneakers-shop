import { useState } from "react";

const useCart = (initialValue = [], key = "cart") => {
  const [cartItems, setCartItems] = useState(initialValue);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeCartItemById = (id) =>
    setCartItems((prev) => {
      prev = [...prev];

      prev = prev.filter((item) => item.id !== id);

      return prev;
    });

  return { cartItems, setCartItems, addToCart, removeCartItemById };
};

export default useCart;
