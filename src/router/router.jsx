import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import React from "react";

const HomePage = React.lazy(() => import('../pages/HomePage'));
const FavouritePage = React.lazy(() => import('../pages/FavouritePage'));
const OrdersPage = React.lazy(() => import('../pages/OrdersPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true
            },
            {
                path: '/favourites',
                element: <FavouritePage />
            },
            {
                path: '/orders',
                element: <OrdersPage />
            },
        ]
    }
]);

export default router;