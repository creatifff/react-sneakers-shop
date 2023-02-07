import { useContext, useEffect, useRef } from "react";
import { CartContext, ModalContext } from "../../pages/Root";
import CartItem from "../cartItem/CartItem";

const CartModal = () => {
  const { isModalActive, toggleModal } = useContext(ModalContext);
  const cart = useContext(CartContext);

  const overlayRef = useRef();

  const closeModal = (e) => {
    if (e.target === overlayRef.current) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isModalActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    // Unmount 
    return () => document.body.style.overflow = '';
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

        <footer className="modal-footer">footer</footer>
      </div>
    </div>
  );
};

export default CartModal;
