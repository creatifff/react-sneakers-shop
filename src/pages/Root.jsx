import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import CartModal from "../components/cartModal/CartModal";
import Header from "../components/header/Header";
import useCart from "../hooks/useCart";
import useFavourite from "../hooks/useFavourite";

export const ModalContext = createContext({});
export const CartContext = createContext({});
export const FavouriteContext = createContext({});

const Root = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const cart = useCart([]);
  const favourite = useFavourite([]);

  console.log(favourite.favourites);

  const toggleModal = setIsModalActive.bind(this, !isModalActive);

  return (
    <FavouriteContext.Provider value={favourite}>
      <CartContext.Provider value={cart}>
        <ModalContext.Provider value={{ isModalActive, toggleModal }}>
          <div className="layout">
            <Header />
            <main>
              <Outlet />
            </main>
            <CartModal />
          </div>
        </ModalContext.Provider>
      </CartContext.Provider>
    </FavouriteContext.Provider>
  );
};

export default Root;
