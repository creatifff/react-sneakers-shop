import { RemoveIcon } from "../Icons/Icons";
import formatNumber from "../../utils/formatNumber";
import { useContext } from "react";
import { CartContext } from "../../pages/Root";

const CartItem = ({ item }) => {

    const {removeCartItemById} = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.preview} alt={item.title} />
      <div className="cart-item__content">
        <h4>{item.title}</h4>
        <p className="price">{formatNumber(item.price)}</p>
        <button onClick={removeCartItemById.bind(this, item.id)}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
