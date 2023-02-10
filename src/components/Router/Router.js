import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import { productsAndCartLoader } from "../../Loader/Loader";
import Inventory from "../Inventory/Inventory";
import Login from "../Login/Login";
import Order from "../Order/Order";
import Shop from "../Shop/Shop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('products.json');
                },
                element: <Shop></Shop>
            },
            {
                path: 'order',
                loader: productsAndCartLoader,
                element: <Order></Order>
            },
            {
                path: 'inventory',
                element: <Inventory></Inventory>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ],
    },
    { path: '*', element: <div>Component not found !</div> }
]);