import { useContext, useEffect, useRef } from "react";
import { CartContext, ModalContext } from "../../pages/Root";
import calculateTax from "../../utils/calculateTax";
import cartTotal from "../../utils/cartTotal";
import formatNumber from "../../utils/formatNumber";
import CartItem from "../cartItem/CartItem";

const CartModal = () => {
  const { isModalActive, toggleModal } = useContext(ModalContext);
  const cart = useContext(CartContext);

  const overlayRef = useRef();

  const total = cartTotal(cart.cartItems);
  const totalTax = calculateTax(total, 5);

  const closeModal = (e) => {
    if (e.target === overlayRef.current) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Unmount
    return () => (document.body.style.overflow = "");
  }, [isModalActive]);

  return (
    <div
      onClick={closeModal}
      ref={overlayRef}
      className={`${isModalActive ? "overlay active" : "overlay"}`}
    >
      <div className="modal">
        <header className="modal-header">
          <h2>Корзина</h2>
        </header>

        <div className="modal-body">
          <div className="cart-items">
            {cart.cartItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
        </div>

        <footer className="modal-footer">
          <div className="total">
            <div className="row">
              <span className="text">Итого:</span>
              <div className="underline"></div>
              <span className="price">{formatNumber(total)}</span>
            </div>
            <div className="row">
              <span className="text">Налог 5%:</span>
              <div className="underline"></div>
              <span className="price">{formatNumber(totalTax)}</span>
            </div>
          </div>

          <button className="button w100">Оформить заказ</button>
        </footer>
      </div>
    </div>
  );
};

export default CartModal;
