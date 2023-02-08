import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import CartModal from "../components/cartModal/CartModal";
import Header from "../components/header/Header";
import useCart from "../hooks/useCart";

export const ModalContext = createContext({});
export const CartContext = createContext({});


const Root = () => {

    const [isModalActive, setIsModalActive] = useState(false);
    
    const cart = useCart([]);

    const toggleModal = setIsModalActive.bind(this, !isModalActive);

    return (
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
    )
}   

export default Root;