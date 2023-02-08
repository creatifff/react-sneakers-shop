import { useContext } from "react";
import { CartContext } from "../../pages/Root";
import formatNumber from "../../utils/formatNumber";
import { HeartIcon, AddIcon } from "../Icons/Icons";

const Product = ({ product }) => {

  const {addToCart} = useContext(CartContext);

  return (
    <div className="product">
      <div className="product__action">
        <button>
          <HeartIcon size={14} />
        </button>
      </div>

      <img src={product.preview} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="product__footer">
        <div className="price">
          <span className="text">Цена:</span>
          <span className="value">{formatNumber(product.price)}</span>
        </div>

        <button onClick={addToCart.bind(this, product)}>
          <AddIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default Product;