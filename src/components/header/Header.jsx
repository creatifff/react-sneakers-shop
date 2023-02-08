import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CartContext, ModalContext } from "../../pages/Root";
import cartTotal from "../../utils/cartTotal";
import formatNumber from "../../utils/formatNumber";

const CartButton = () => {

  const {toggleModal} = useContext(ModalContext);

  const {cartItems} = useContext(CartContext);

  const total = cartTotal(cartItems);

  return (
    <button onClick={toggleModal}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{formatNumber(total)}</span>
    </button>
  );
};

const Header = () => {
  return (
    <header className="header">
      <NavLink className="logo__link" to="/">
        <div className="logo">
          <img src={logo} alt="React Sneakers logo" />
          <div>
            <h1>React Sneakers</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </NavLink>

      <nav className="nav">
        <CartButton />
        <NavLink to="/favourites">
          <i className="fa-solid fa-heart"></i>
        </NavLink>
        <NavLink to="/orders">
          <i className="fa-solid fa-user"></i>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
