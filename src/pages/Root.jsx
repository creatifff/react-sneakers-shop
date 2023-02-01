import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Root = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}   

export default Root;